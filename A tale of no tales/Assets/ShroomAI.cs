using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[RequireComponent(typeof(Entity))]
public class ShroomAI : MonoBehaviour
{
    public Color color;
    public List<GameObject> Friends = new List<GameObject>();
    public List<GameObject> KnownEnemyies = new List<GameObject>();
    public List<string> EnemyTypes = new List<string>();
    Rigidbody2D myrb;
    public float Speed = 2;
    public float DistanceAttack;
    Vector2 MovementDir;
    Animator anim;
    Entity me;
    public int DamageAmount = 1;
    public int CooldownTime = 10;
    public int HealTime = 10;
    bool Healing = false;
    bool CanAttack = true;
    ParticleSystem PS;
    ParticleSystem.MainModule PSM;
    // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
        PS = GetComponent<ParticleSystem>();
        PSM = PS.main;
        PSM.startColor = color;
        me = GetComponent<Entity>();
        myrb = GetComponent<Rigidbody2D>();
    }
    public int NumberOfSightLines = 15;
    // Update is called once per frame
    public float rotateSpeed = 1000;
    void Update()
    {
        if (KnownEnemyies.Count == 0 && !Healing)
        {
            Healing = true;
            StartCoroutine(Heal());
        }
        if (me.Health <= 0)
        {
            Destroy(this.gameObject);
        }

        foreach (GameObject friend in Friends)
        {
            Debug.DrawLine(this.transform.position, friend.transform.position, Color.blue, 0.1f);
        }
        foreach (GameObject enemy in KnownEnemyies)
        {
            Debug.DrawLine(this.transform.position, enemy.transform.position, Color.red, 0.1f);

            if (Vector2.Distance(enemy.transform.position, transform.position) < DistanceAttack)
            {

                if (KnownEnemyies.Contains(enemy) && EnemyTypes.Contains(enemy.GetComponent<Entity>().EntityName))
                {
                    if (CanAttack)
                    {
                        PS.Play();
                        enemy.GetComponent<Entity>().Health -= DamageAmount;
                        CanAttack = false;
                        
                        StartCoroutine(AttackCoolDown());
                    }
                }
            }


        }

        if (KnownEnemyies.Count == 0)
        {


            if (myrb.velocity.x > -0.1f && myrb.velocity.x < 0.1f && myrb.velocity.y > -0.1f && myrb.velocity.y < 0.1f)
            {
                MovementDir = new Vector2(Random.Range(-2, 2), Random.Range(-2, 2));
            }


        }
        else
        {
            if (Vector2.Distance(this.transform.position, KnownEnemyies[0].transform.position) > DistanceAttack)
            {
                var Direction = (KnownEnemyies[0].transform.position - this.transform.position) / (KnownEnemyies[0].transform.position - this.transform.position).magnitude;
                MovementDir = Direction;
            }
            else
            {
                MovementDir = Vector2.zero;
            }
        }
        
        
        if(!(myrb.velocity.x > -0.1f && myrb.velocity.x < -0.1f && myrb.velocity.y > -0.1f && myrb.velocity.y < -0.1f))
        {
            anim.SetBool("Moving", true);
        }
        else
        {
            anim.SetBool("Moving", false);
        }



        myrb.AddForce(MovementDir * Time.deltaTime * Speed);
        MovementDir = Vector2.zero;

        Debug.DrawRay(this.transform.position, myrb.velocity * 10, Color.grey);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.GetComponent<Entity>())
        {
            if (!Friends.Contains(collision.gameObject) && collision.gameObject.GetComponent<Entity>().EntityName == me.EntityName)
            {
                Friends.Add(collision.gameObject);
            }
            
        }

    }

    private void OnTriggerStay2D(Collider2D collision)
    {
        if (collision.gameObject.GetComponent<Entity>())
        {
            if (EnemyTypes.Contains(collision.gameObject.GetComponent<Entity>().EntityName) && !KnownEnemyies.Contains(collision.gameObject))
            {
                KnownEnemyies.Add(collision.gameObject);
            }
        }
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.gameObject.GetComponent<Entity>())
        {
            if (Friends.Contains(collision.gameObject) && collision.gameObject.GetComponent<Entity>().EntityName == me.EntityName)
            {
                Friends.Remove(collision.gameObject);
            }
            if (KnownEnemyies.Contains(collision.gameObject) && EnemyTypes.Contains(collision.gameObject.GetComponent<Entity>().EntityName))
            {
                KnownEnemyies.Remove(collision.gameObject);
                
            }
        }
    }

    private void OnCollisionStay2D(Collision2D collision)
    {
        var Direction = (collision.transform.position - this.transform.position) / (collision.transform.position - this.transform.position).magnitude;
        MovementDir = Vector2.zero;
        
    }

    private IEnumerator AttackCoolDown()
    {
        yield return new WaitForSeconds(CooldownTime);
        CanAttack = true;
        PS.Stop();
    }

    private IEnumerator Heal()
    {
        yield return new WaitForSeconds(HealTime);
        Healing = false;
        if(me.Health < 100)
        {
            me.Health += 5;
        }
    }
}
