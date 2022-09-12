USE generation2;

SELECT Students.*, Countries.name country 
FROM Students 
INNER JOIN Countries 
ON Students.nationality = Countries.idCountries;

-- Modify the previous SQL statment so it joins the Students table with the IDTypes table to know each students' type of ID.

SELECT Students.*, 
idtypes.*
FROM Students 
INNER JOIN idtypes
ON Students.IdType_id = idtypes.id_idtypes;

SELECT courses.*
name.*
FROM Students
INNER JOIN name
ON Strudents.module_code = module.code
