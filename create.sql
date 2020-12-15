/*
 Navicat Premium Data Transfer

 Source Server         : hellocode
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : 39.97.118.39:3306
 Source Schema         : cov

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 10/12/2020 17:11:40
*/

CREATE DATABASE cov;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history`  (
  `ds` datetime(0) NOT NULL COMMENT '日期',
  `confirm` int NULL DEFAULT NULL COMMENT '累计确诊',
  `confirm_add` int NULL DEFAULT NULL COMMENT '当日新增确诊',
  `suspect` int NULL DEFAULT NULL COMMENT '剩余疑似',
  `suspect_add` int NULL DEFAULT NULL COMMENT '当日新增疑似',
  `heal` int NULL DEFAULT NULL COMMENT '累计治愈',
  `heal_add` int NULL DEFAULT NULL COMMENT '当日新增治愈',
  `dead` int NULL DEFAULT NULL COMMENT '累计死亡',
  `dead_add` int NULL DEFAULT NULL COMMENT '当日新增死亡',
  PRIMARY KEY (`ds`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for details
-- ----------------------------
DROP TABLE IF EXISTS `details`;
CREATE TABLE `details`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '数据最后更新时间',
  `province` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '省',
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '市',
  `confirm` int NULL DEFAULT NULL COMMENT '累计确诊',
  `confirm_add` int NULL DEFAULT NULL COMMENT '新增治愈',
  `heal` int NULL DEFAULT NULL COMMENT '累计治愈',
  `dead` int NULL DEFAULT NULL COMMENT '累计死亡',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 463 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;