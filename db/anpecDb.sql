CREATE DATABASE  IF NOT EXISTS `heroku_a99ad807e29f105` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `heroku_a99ad807e29f105`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: us-cdbr-east-05.cleardb.net    Database: heroku_a99ad807e29f105
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compativel`
--

DROP TABLE IF EXISTS `compativel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compativel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cod_pc_ori` varchar(30) DEFAULT NULL,
  `cod_pc_comp` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cod_pc_ori` (`cod_pc_ori`),
  KEY `cod_pc_comp` (`cod_pc_comp`),
  CONSTRAINT `compativel_ibfk_1` FOREIGN KEY (`cod_pc_ori`) REFERENCES `pecas_ori` (`codigo`),
  CONSTRAINT `compativel_ibfk_2` FOREIGN KEY (`cod_pc_comp`) REFERENCES `pecas_comp` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compativel`
--

LOCK TABLES `compativel` WRITE;
/*!40000 ALTER TABLE `compativel` DISABLE KEYS */;
INSERT INTO `compativel` VALUES (1,'cod0001','comp001'),(2,'cod0001','comp002'),(3,'cod0001','comp004'),(4,'cod0002','comp003'),(5,'cod0003','comp004'),(6,'cod0003','comp005'),(7,'cod0004','comp006'),(8,'cod0004','comp003'),(11,'cod0001','asd'),(12,'cod0001','asd'),(13,'cod0001','teste23'),(14,'cod0001','teste23'),(15,'cod0001','teste23'),(16,'cod0001','teste21'),(17,'cod0001','teste28'),(24,'cod0033','comp0033'),(34,'cod0033','comp0033');
/*!40000 ALTER TABLE `compativel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pecas_comp`
--

DROP TABLE IF EXISTS `pecas_comp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pecas_comp` (
  `codigo` varchar(30) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `fabricante` varchar(30) DEFAULT NULL,
  `modelo` varchar(30) DEFAULT NULL,
  `observacao` text,
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pecas_comp`
--

LOCK TABLES `pecas_comp` WRITE;
/*!40000 ALTER TABLE `pecas_comp` DISABLE KEYS */;
INSERT INTO `pecas_comp` VALUES ('asd','asdas','asdas','asda','adsas'),('com324','comp324','dasjhjkas','askhjadsjlh','hklasdhj'),('comop222','dsajkdhdh','adhjsh','adjhadh','dhdhsjkas'),('comp001','pc_comp 01','comp_inc','impressora0001','text text text text text'),('comp002','pc_comp 02','comp_inc','impressora0001','text text text text text'),('comp003','pc_comp 03','comp_inc','impressora0002','text text text text text'),('comp0033','sads','sadsa','dsada','dsadsadsa'),('comp004','pc_comp 04','comp_inc','impressora0003','text text text text text'),('comp005','pc_comp 05','comp_inc','impressora0003','text text text text text'),('comp0055','dsasasd','asdaad','dasdas','asdassa'),('comp006','pc_comp 06','comp_inc','impressora0004','text text text text text'),('comp010','asdas','asdas','asda','adsas'),('comp011','asdas','asdas','asda','adsas'),('comp012','asdas','asdas','asda','adsas'),('comp055','dasdasd','asdsa','sadsadsasad','dsadsa'),('comp234','comp234','comp234','comp234','adsjghk'),('teste21','teste21','teste21','teste2121','ewwerdsa'),('teste22','teste22','teste22','teste22','testetetsttetetts221'),('teste23','teste23','teste23','teste23','yesteyysg'),('teste24','dasfdsf','fasddsa','fasdf','asfdsas'),('teste25','dasdas','dasda','dasda','asdasddaas'),('teste27','sadasd','asda','dasd','dasda'),('teste28','dasda','asdasda','dasdas','asdasdas');
/*!40000 ALTER TABLE `pecas_comp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pecas_ori`
--

DROP TABLE IF EXISTS `pecas_ori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pecas_ori` (
  `codigo` varchar(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `fabricante` varchar(30) DEFAULT NULL,
  `modelo` varchar(30) DEFAULT NULL,
  `linha` enum('continuada','descontinuada') DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pecas_ori`
--

LOCK TABLES `pecas_ori` WRITE;
/*!40000 ALTER TABLE `pecas_ori` DISABLE KEYS */;
INSERT INTO `pecas_ori` VALUES ('305k67567','xpto','xingling','xiuxiu','continuada'),('305k67590','xpto','xingling','xiuxiu','continuada'),('34825156','dasda','dasda','dasda','descontinuada'),('cod0001','peça teste 01','xiuxiu','impressora0001','continuada'),('cod0002','peça teste 02','xiuxiu','impressora0002','descontinuada'),('cod0003','peça teste 03','xiuxiu','impressora0003','descontinuada'),('cod0004','peça teste 04','xiuxiu','impressora0004','continuada'),('cod0006','peça teste 06','xiuxiu','impressora0006','continuada'),('cod0007','peça teste 07','xiuxiu','impressora0007','continuada'),('cod0008','peça teste 08','xiuxiu','impressora0008','continuada'),('cod0009','peça teste 09','xiuxiu','impressora0009','continuada'),('cod0033','trintaetres','tr','trintrin','continuada'),('cod0055','hgsfgha','sdas','sadas','continuada'),('teste002','pecateste','fabricanteste','modeloteste','continuada');
/*!40000 ALTER TABLE `pecas_ori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'heroku_87c2b3225a93240'
--

--
-- Dumping routines for database 'heroku_87c2b3225a93240'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-01 13:07:05
