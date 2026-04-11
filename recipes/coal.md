---
id: rec_charcoal
name: coal
type: metal

requires:
  - id: res_wood
    ratio: 1
    unit: parts

  - any_of:
      - id: mat_charcoal
      - id: mat_coal

produces:
  - id: mat_charcoal
    ratio: 0.25

byproducts:
  - id: mat_wood_tar

temperature_c: 600

time:
  value: 6
  unit: h

terrain:
  - forest

hazards:
  level: 2
  risks:
    - smoke

measurement:
  mode: proportional
---

# Charcoal

## Overview
Charcoal is produced by heating wood in a low-oxygen environment.

---

![image][appwrite]

---

## Requirements

##### Ingredients
- Wood: 1 part

#### Alternatives
- Fuel (choose one):
  - Charcoal
  - Coal

#### Tools / Structures
- Kiln

---

## Output

- Charcoal: ~0.25 parts

#### Byproducts
- Wood tar

---

## Conditions

- Temperature: ~600°C
- Time: ~6 hours
- Terrain: Forest

---

## Hazards

- Level: 2
- Risks:
  - Smoke
- Mitigation:
  - Ensure ventilation

---

## Steps

1. Stack wood into a mound.
2. Cover with soil or clay.
3. Ignite with limited oxygen.
4. Let it smolder for several hours.

---

## Notes

- Hardwood produces better charcoal.
- Avoid excessive airflow.

[coal image]: /assets/coal.webp