using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class PopulationCalculator
{
    public static List<EntityCounter> Entities = new List<EntityCounter>();
    public static void Add(Entity e)
    {
        foreach (EntityCounter ent in Entities)
        {
            if (ent.Name == e.EntityName)
            {
                    ent.Count++;
                    return;
            }
        }
        var b = new EntityCounter();
        b.Count = 1;
        b.Name = e.EntityName;
        Entities.Add(b);
    }
    public static void Remove(Entity e)
    {
        
        foreach(EntityCounter ent in Entities)
        {
            if(ent.Name == e.EntityName)
            {
                if(ent.Count > 0)
                {
                    ent.Count--;
                    return;
                }
                else
                {
                    Entities.Remove(ent);
                    return;
                }
            }
        }
    }
}


public class EntityCounter
{
    public string Name = "";
    public int Count;

    public string toString()
    {
        return (Name + ": " + Count);
    }
}
