using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
public class Entity : MonoBehaviour
{
    public float Health = 100;
    public bool ShowHealthBar = false;
    public Slider Healthbar;
    public string EntityName = "Slime";
    public TextMeshProUGUI NameTag;
    // Start is called before the first frame update
    void Start()
    {

        PopulationCalculator.Add(this);
        
    }

    // Update is called once per frame
    void Update()
    {
        NameTag.text = EntityName;
        Healthbar.value = Health / 100;
    }
    private void OnDestroy()
    {
        
        PopulationCalculator.Remove(this);
    }
}
