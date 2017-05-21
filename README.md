# SkillTree

Using a json input containing skills, groups and rules to dictate what is available to the player, build a visual tree
that users can use to build their character sheet (for a LARP or for a tabletop rpg). Built in Angular using Typescript.

## Example input

See `src/SentiersDeLOubli.json` or `src/TraitreLame.json`

## Rule Types

- Cost : A skill or group can cost one or more type of currency, such as xp for example
- MaxChildren : A group can have a limit on how many **unique** skills are taken inside
- MaxChildrenPer : Same as MaxChildren, but with a multiplier (e.g. for each point taken in skill.1 you can take two skills in group.1)
- MaxPoints : A skill or group can have a maximum of points taken
- MaxPointsPer : Same as MaxPoints, but with a multiplier (e.g. for each point taken in skill.1 you can take two points in group.1 or skill.2)
- PointsIn : A skill or group can be valid only if a set number of points is taken in another skill/group. This rule type has an `Operator` field, that can dictate if the value is the minimum or maximum for example.
- ParentValid : For internal use only.
