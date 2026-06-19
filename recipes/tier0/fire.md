---
id: rec_fire
name: fire
type: energy
tier: 0

keywords:
  - fire
  - flame
  - heat
  - ignition
  - combustion

summary: Basic controlled fire created using friction, sparks, or existing embers.

ingredients:
  - type: choice
    quantity: 1
    unit: ignition_source
    options:
      - id: tool_hand_drill
      - id: tool_bow_drill
      - id: tool_fire_plough
      - id: tool_flint_and_steel

  - type: item
    id: res_tinder
    quantity: 1
    unit: bundle

  - type: item
    id: res_kindling
    quantity: 1
    unit: bundle

outputs:
  - id: energy_fire
    quantity: 1
    unit: fire
    quality: 1

hazards:
  level: 2
  risks:
    - burns
    - wildfire
    - smoke inhalation
---

# Fire

Fire is one of the most important technologies for survival. It provides heat, light, protection, water purification, cooking capability, and enables the creation of many other materials and tools.

## Requirements

A successful fire requires three things:

1. An ignition source
2. Dry tinder
3. Fuel

Without all three, ignition becomes difficult or impossible.

## Ignition Methods

### Friction

Friction methods generate heat by rubbing materials together until fine wood dust reaches ignition temperature.

Examples:

- Hand drill
- Bow drill
- Fire plough

### Spark

Spark methods create hot particles that ignite prepared tinder.

Examples:

- Flint and steel
- Ferrocerium rod
- Quartz and high-carbon steel

## Steps

1. Prepare a dry tinder bundle.
2. Gather small kindling and larger fuel wood.
3. Create ignition using friction or sparks.
4. Transfer the ember or flame to the tinder.
5. Gently increase airflow.
6. Add kindling gradually.
7. Add larger fuel once the fire becomes stable.

## Fuel Progression

Recommended order:

1. Tinder
2. Small twigs
3. Finger-sized sticks
4. Wrist-sized wood
5. Larger fuel logs

Adding large fuel too early may extinguish the fire.

## Indicators of Success

- Tinder ignites quickly.
- Flame sustains itself without constant blowing.
- Kindling catches evenly.
- Smoke decreases as combustion improves.

## Common Problems

### Tinder Will Not Ignite

Possible causes:

- Wet materials
- Insufficient heat
- Poor airflow

### Fire Dies Quickly

Possible causes:

- Fuel added too early
- Lack of tinder
- Damp wood

### Excessive Smoke

Possible causes:

- Wet fuel
- Restricted airflow
- Incomplete combustion

## Uses

Fire enables:

- Water boiling
- Cooking
- Charcoal production
- Clay firing
- Light generation
- Heat generation
- Signaling
- Predator deterrence

## Warnings

Never leave a fire unattended.

Clear flammable material around the fire area before ignition.

Fully extinguish all embers before leaving the site.