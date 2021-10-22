using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SenseChild : MonoBehaviour
{
    public float Distance;
    public bool Contact_Target = false;
    public Vector2 Direction;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnTriggerStay2D(Collider2D collision)
    {
        if(Vector2.Distance(this.transform.position,collision.transform.position) <= Distance)
        {
            Debug.DrawLine(this.transform.position, collision.transform.position, Color.red, 1);
            Contact_Target = true;
            Direction = (collision.transform.position - this.transform.position) / (collision.transform.position - this.transform.position).magnitude;


        }
        else
        {
            Contact_Target = false;
            Direction = new Vector2(0, 0);
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        Contact_Target = false;
        Direction = new Vector2(0, 0);
    }
}
