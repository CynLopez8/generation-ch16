
DROP TABLE Students;

CREATE TABLE Students(
  idStudent INT NOT NULL,
  IdType_id INT NOT NULL,
  name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  email VARCHAR(200) NULL,
  address VARCHAR(250) NULL,
  birthdate DATETIME NULL,
  nationality VARCHAR(50) NOT NULL,
  PRIMARY KEY (idStudent));
  
  SELECT * FROM Students;
  
  INSERT INTO Students(idStudent,IdType_id,name,last_name,email,address,birthdate,nationality) 
  VALUES (10545,1,'Felipe','Maqueda','felipe@generation.org','Cra 15 No 38 -25 Bogota','1992-04-01 00:00:00','Mexicana');

