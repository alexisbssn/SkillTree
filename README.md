# SkillTree

Will accept a json with skills, skill groups, costs, etc. and will build a visual tree
that users can use to build their character (for a LARP or for a tabletop rpg).

## Rule Types

Skills and skill groups can have rules to limit players getting a particular skill that has requirements.

A `Rule` has a `Name`, `Description` (error message), `Type`, `Value`, `Target`

The following `Rule.Type` are possible:
- > (`Target` has greater than `Value` points taken)
- < (`Target` has less than `Value` points taken)
- >= (`Target` has greater or equal `Value` points taken)
- <= (`Target` has less or equal `Value` points taken)
- cost (It costs `Value` xp to get this skill.)
- maximum (A player cannot get more than `Value` points in this skill/group)
- unique (A player cannot get more than `Value` different skills in this group)
