using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DataFeed : MonoBehaviour
{
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        foreach(EntityCounter e in PopulationCalculator.Entities)
        {
            Debug.Log(e.toString());
        }
    }
}
