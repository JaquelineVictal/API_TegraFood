CREATE DATABASE TragoFood;
USE TragoFood;
--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;


CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `price` FLOAT NOT NULL,
  `description` VARCHAR(300) NULL,
  `image` VARCHAR(300) NULL,
  `category` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Pizza de mussarela', '45', 'Feito com molho de tomate especial', 'https://...', 'salgado');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Torta de leite ninho', '25', 'Torta feita com leite ninho em pó', 'https://drive.google.com/file/d/1WgzVqV1DA8_Jff2gClUawNYSOrGKEF4C/view?usp=sharing', 'sobremesa');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Barca de açai', '25', '', 'https://drive.google.com/file/d/1rmmFxAn_uWmq4Hdh0vAgaqroGQy7HiWF/view?usp=sharing', 'sobremesa');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('X-tudo', '35', '', 'https://drive.google.com/file/d/1LWeeojL1b4qjlFztZ_Ip0pKqZXVfBQ5o/view?usp=sharing', 'salgado');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('X-Churrasco', '55', '', 'https://drive.google.com/file/d/122mSQD2Nsy9wdYk4IU0moj1X4YpXcS_g/view?usp=sharing', 'salgado');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Pizza de strogonofe', '75', '', 'https://drive.google.com/file/d/1HcQhVc_cZX307AhYjj-2RNyuiHHBwsfR/view?usp=sharing', 'salgado');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Coca cola zero', '6.5', '', 'https://drive.google.com/file/d/1HfBMGIv2jPWkfLgtWlRvL05tVH59Ew32/view?usp=sharing', 'bebida');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Pastel de frango', '15', 'Frango bem temperada', NULL, 'salgado');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Coxinha', '8', 'Coxinha de frango bem temperada', 'https://...', 'salgado');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Água com gás', '5', 'Água com gás  de 500ml', 'https://...', 'bebida');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Torta de maça', '25', 'Torta de maça com morango', NULL, 'sobremesa');
INSERT INTO `tragofood`.`products` (`title`, `price`, `description`, `image`, `category`) VALUES ('Pizza de frango', '45.5', 'Feito com molho de tomate especial', 'https://...', 'salgado');

  


