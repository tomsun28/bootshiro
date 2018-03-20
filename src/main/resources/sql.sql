DROP DATABASE IF EXISTS authshiro;
CREATE DATABASE authshiro DEFAULT CHARACTER SET utf8;
USE authshiro;

DROP TABLE IF EXISTS `auth_resource`;
CREATE TABLE `auth_resource` (
  `ID` varchar(32) NOT NULL COMMENT '主键',
  `CODE` varchar(20) DEFAULT NULL COMMENT '编码',
  `NAME` varchar(20) DEFAULT NULL COMMENT '名称',
  `PARENT_ID` varchar(32) DEFAULT NULL COMMENT '父资源编码',
  `URL` varchar(255) DEFAULT NULL COMMENT '访问地址',
  `TYPE` smallint(1) DEFAULT NULL COMMENT '类型 1:菜单 2:元素',
  `STATUS` smallint(1) DEFAULT '1' COMMENT '状态   1:正常、9：禁用',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `auth_resource` VALUES ('001', 'ARTICLE_LIST', '文章列表', null, '/article/list', '1', '1');
INSERT INTO `auth_resource` VALUES ('001001', 'ARTICLE_ADD', '添加文章', null, '/article/add', '2', '1');
INSERT INTO `auth_resource` VALUES ('001002', 'ARTICLE_DELETE', '删除文章', null, '/article/delete', '2', '1');
INSERT INTO `auth_resource` VALUES ('001003', 'ARTICLE_UPDATE', '修改文章', null, '/article/update', '2', '1');
INSERT INTO `auth_resource` VALUES ('002', 'USER_MAGE', '用户管理', null, '/user/**', '1', '1');
INSERT INTO `auth_resource` VALUES ('003', 'ROLE_MAGE', '角色管理', null, '/role/**', '1', '1');
INSERT INTO `auth_resource` VALUES ('004', 'RESOURCE_MAGE', '资源管理', null, '/resource/**', '1', '1');
INSERT INTO `auth_resource` VALUES ('005', 'ONLINES', '在线用户', null, '/onlines/**', '1', '1');

DROP TABLE IF EXISTS `auth_role`;
CREATE TABLE `auth_role` (
  `CODE` varchar(20) NOT NULL COMMENT '名称',
  `NAME` varchar(255) DEFAULT NULL COMMENT '描述',
  `STATUS` smallint(1) DEFAULT '1' COMMENT '状态   1:正常、9：禁用'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `auth_role` VALUES ('role_admin', '系统管理员角色', '1');
INSERT INTO `auth_role` VALUES ('role_editor', '小辑角色', '1');
INSERT INTO `auth_role` VALUES ('role_chief', '主编角色', '1');
INSERT INTO `auth_role` VALUES ('role_guest', '访客角色', '1');

DROP TABLE IF EXISTS `auth_role_resource`;
CREATE TABLE `auth_role_resource` (
  `ID` varchar(32) NOT NULL,
  `ROLE_ID` varchar(32) NOT NULL,
  `RESOURCE_ID` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `auth_role_resource` VALUES ('04c8cf295d43409aa5e2b9588f46c757', 'role_chief', '001');
INSERT INTO `auth_role_resource` VALUES ('196aab914f1048aeb0035e6f7ac1f0ce', 'role_editor', '001001');
INSERT INTO `auth_role_resource` VALUES ('4f724ce66fab4345bbaa0a4ca8cee880', 'role_editor', '001');
INSERT INTO `auth_role_resource` VALUES ('50b15ddf0a644ba99fd9141c5f7b6819', 'role_admin', '002');
INSERT INTO `auth_role_resource` VALUES ('57890ecad7cd41ed96bee3baadb437f3', 'role_chief', '001003');
INSERT INTO `auth_role_resource` VALUES ('5d8ca701d25a487b8f3261edb4b7e960', 'role_admin', '003');
INSERT INTO `auth_role_resource` VALUES ('6fa0882f72ef4ae08bd61e21aa3fc5c6', 'role_admin', '001');
INSERT INTO `auth_role_resource` VALUES ('720ddf52923c49398348eaddca08e182', 'role_admin', '004');
INSERT INTO `auth_role_resource` VALUES ('772e6810fea440d29d575e9de9c8f084', 'role_chief', '001002');
INSERT INTO `auth_role_resource` VALUES ('f11fb3be7b6744a9bd91f7142a593a6b', 'role_chief', '001001');
INSERT INTO `auth_role_resource` VALUES ('f96611e1c89b49bfa68f5efc176a4bb2', 'role_admin', '005');


DROP TABLE IF EXISTS `auth_user`;

CREATE TABLE `auth_user` (
  `id` varchar(32) NOT NULL  COMMENT 'ID主键',
  `username` varchar(20) NOT NULL UNIQUE COMMENT '用户名',
  `password` varchar(32) NOT NULL COMMENT '密码(MD5(密码+盐))',
  `salt` varchar(32) DEFAULT NULL COMMENT '盐',
  `real_name` varchar(20) DEFAULT NULL COMMENT '用户真名',
  `avatar` varchar(150) DEFAULT NULL COMMENT '头像',
  `phone` varchar(20) DEFAULT NULL UNIQUE COMMENT '电话号码',
  `email` varchar(50) DEFAULT NULL COMMENT '邮件地址',
  `sex` tinyint(1) DEFAULT NULL COMMENT '性别(1.男 2.女)',
  `status` tinyint(1) DEFAULT NULL COMMENT '账户状态(1.正常 2.锁定 3.删除 4.非法)',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_where` tinyint(1) DEFAULT NULL COMMENT '创建来源(1.web 2.android 3.ios 4.win 5.macos 6.ubuntu)',
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';

INSERT INTO `auth_user` VALUES ('3a50b501dbf24f7aa2a538ffc3752b1d', 'editor', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '小编', null, '111', null, null,null, '2017-12-15 11:48:45', null, null);
INSERT INTO `auth_user` VALUES ('5202f5a818654d3c81228a17ed8ed7e5', 'admin', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '管理员', null, '3222',null, null,null, '2017-12-15 11:47:47', null, null);
INSERT INTO `auth_user` VALUES ('c008503beffe45ca99305da65bca77ef', 'chief', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '主编', null, '3333', null, null,null, '2017-12-15 11:49:05', null, null);
INSERT INTO `auth_user` VALUES ('dbec2a5f301b44b0b6f2f07105846aad', 'guest', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '访客', null, '4444', null, null,null, '2017-12-15 11:48:15', null, null);

DROP TABLE IF EXISTS `auth_user_role`;
CREATE TABLE `auth_user_role` (
  `ID` varchar(32) NOT NULL,
  `USER_ID` varchar(32) NOT NULL,
  `ROLE_ID` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `auth_user_role` VALUES ('0120120b5d3d43d78c126b030636e6c1', 'c008503beffe45ca99305da65bca77ef', 'role_chief');
INSERT INTO `auth_user_role` VALUES ('1ea1ba41242a4eefaa531d1988d2c1b9', '3a50b501dbf24f7aa2a538ffc3752b1d', 'role_editor');
INSERT INTO `auth_user_role` VALUES ('44a3e156f54c40a2af00c96447debf34', 'c008503beffe45ca99305da65bca77ef', 'role_admin');
INSERT INTO `auth_user_role` VALUES ('9f6e799b797f40bc8a0d3cf817d8d686', 'dbec2a5f301b44b0b6f2f07105846aad', 'role_admin');
INSERT INTO `auth_user_role` VALUES ('f332fffd357542da983b0645f113767a', '5202f5a818654d3c81228a17ed8ed7e5', 'role_admin');




### new database struct 2
############################################################################

############################################################################

############################################################################

############################################################################


DROP DATABASE IF EXISTS authCenter;
CREATE DATABASE authCenter DEFAULT CHARACTER SET utf8;
USE authCenter;

DROP TABLE IF EXISTS `auth_resource`;
CREATE TABLE `auth_resource` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '资源ID',
  `CODE` varchar(20) DEFAULT NULL COMMENT '资源名称',
  `NAME` varchar(20) DEFAULT NULL COMMENT '资源描述',
  `PARENT_ID` int(11) DEFAULT NULL COMMENT '父资源编码',
  `URL` varchar(100) DEFAULT NULL COMMENT '访问地址URL',
  `TYPE` smallint(4) DEFAULT NULL COMMENT '类型 1:菜单 2:资源',
  `STATUS` smallint(4) DEFAULT '1' COMMENT '状态   1:正常、9：禁用',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COMMENT='资源表';

INSERT INTO `auth_resource` VALUES (null,'ARTICLE_LIST', '文章列表', null, '/article/list', '1', '1');
INSERT INTO `auth_resource` VALUES (null,'ARTICLE_ADD', '添加文章', null, '/article/add', '2', '1');
INSERT INTO `auth_resource` VALUES (null,'ARTICLE_DELETE', '删除文章', null, '/article/delete', '2', '1');
INSERT INTO `auth_resource` VALUES (null,'ARTICLE_UPDATE', '修改文章', null, '/article/update', '2', '1');
INSERT INTO `auth_resource` VALUES (null,'USER_MAGE', '用户管理', null, '/user/**', '1', '1');
INSERT INTO `auth_resource` VALUES (null,'ROLE_MAGE', '角色管理', null, '/role/**', '1', '1');
INSERT INTO `auth_resource` VALUES (null,'RESOURCE_MAGE', '资源管理', null, '/resource/**', '1', '1');
INSERT INTO `auth_resource` VALUES (null,'ONLINES', '在线用户', null, '/onlines/**', '1', '1');

DROP TABLE IF EXISTS `auth_role`;
CREATE TABLE `auth_role` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '组织角色ID',
  `CODE` varchar(20) NOT NULL COMMENT '组织角色名称',
  `NAME` varchar(20) DEFAULT NULL COMMENT '组织角色描述',
  `STATUS` smallint(4) DEFAULT '1' COMMENT '状态   1:正常、9：禁用',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COMMENT='组织角色信息表';

INSERT INTO `auth_role` VALUES (null,'role_admin', '系统管理员角色', '1');
INSERT INTO `auth_role` VALUES (null,'role_member', '成员角色', '1');
INSERT INTO `auth_role` VALUES (null,'role_user', '用户角色', '1');
INSERT INTO `auth_role` VALUES (null,'role_guest', '访客角色', '1');
INSERT INTO `auth_role` VALUES (null,'role_anon', '非角色', '1');


DROP TABLE IF EXISTS `auth_role_resource`;
CREATE TABLE `auth_role_resource` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `ROLE_ID` int(11) NOT NULL COMMENT '角色ID',
  `RESOURCE_ID` int(11) NOT NULL COMMENT '资源ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='资源角色关联表';

INSERT INTO `auth_role_resource` VALUES (null,'100', '100');
INSERT INTO `auth_role_resource` VALUES (null,'101', '102');
INSERT INTO `auth_role_resource` VALUES (null,'102', '100');
INSERT INTO `auth_role_resource` VALUES (null,'103', '102');
INSERT INTO `auth_role_resource` VALUES (null,'100', '100');
INSERT INTO `auth_role_resource` VALUES (null,'101', '102');
INSERT INTO `auth_role_resource` VALUES (null,'100', '101');
INSERT INTO `auth_role_resource` VALUES (null,'101', '100');
INSERT INTO `auth_role_resource` VALUES (null,'103', '101');
INSERT INTO `auth_role_resource` VALUES (null,'103', '103');
INSERT INTO `auth_role_resource` VALUES (null,'102', '103');


DROP TABLE IF EXISTS `auth_user`;

CREATE TABLE `auth_user` (
  `uid` varchar(20) NOT NULL  COMMENT 'uid,用户账号,主键',
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL COMMENT '密码(MD5(密码+盐))',
  `salt` varchar(20) DEFAULT NULL COMMENT '盐',
  `real_name` varchar(20) DEFAULT NULL COMMENT '用户真名',
  `avatar` varchar(100) DEFAULT NULL COMMENT '头像',
  `phone` varchar(20) DEFAULT NULL UNIQUE COMMENT '电话号码(唯一)',
  `email` varchar(20) DEFAULT NULL UNIQUE COMMENT '邮件地址(唯一)',
  `sex` tinyint(4) DEFAULT NULL COMMENT '性别(1.男 2.女)',
  `status` tinyint(4) DEFAULT NULL COMMENT '账户状态(1.正常 2.锁定 3.删除 4.非法)',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_where` tinyint(4) DEFAULT NULL COMMENT '创建来源(1.web 2.android 3.ios 4.win 5.macos 6.ubuntu)',
  PRIMARY KEY (`uid`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';

INSERT INTO `auth_user` VALUES ('3a50b', 'editor', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '小编', null, '111', null, null,null, '2017-12-15 11:48:45', null, null);
INSERT INTO `auth_user` VALUES ('5202f', 'admin', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '管理员', null, '3222',null, null,null, '2017-12-15 11:47:47', null, null);
INSERT INTO `auth_user` VALUES ('c0085', 'chief', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '主编', null, '3333', null, null,null, '2017-12-15 11:49:05', null, null);
INSERT INTO `auth_user` VALUES ('dbec2', 'guest', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '访客', null, '4444', null, null,null, '2017-12-15 11:48:15', null, null);

DROP TABLE IF EXISTS `auth_user_role`;
CREATE TABLE `auth_user_role` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户角色关联表主键',
  `USER_ID` varchar(20) NOT NULL COMMENT '用户UID',
  `ROLE_ID` int(11) NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='用户角色关联表';
INSERT INTO `auth_user_role` VALUES (null,'3a50b', '100');
INSERT INTO `auth_user_role` VALUES (null,'5202f', '101');
INSERT INTO `auth_user_role` VALUES (null,'c0085', '102');
INSERT INTO `auth_user_role` VALUES (null,'dbec2', '103');
INSERT INTO `auth_user_role` VALUES (null,'c0085', '104');

commit;

### new database struct 3
############################################################################

############################################################################

############################################################################

############################################################################


DROP DATABASE IF EXISTS usthe;
CREATE DATABASE usthe DEFAULT CHARACTER SET utf8;
USE usthe;

DROP TABLE IF EXISTS `auth_resource`;
CREATE TABLE `auth_resource` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '资源ID',
  `CODE` varchar(20) DEFAULT NULL COMMENT '资源名称',
  `NAME` varchar(20) DEFAULT NULL COMMENT '资源描述',
  `PARENT_ID` int(11) DEFAULT NULL COMMENT '父资源编码->菜单',
  `URI` varchar(100) DEFAULT NULL COMMENT '访问地址URL',
  `TYPE` smallint(4) DEFAULT NULL COMMENT '类型 1:菜单menu 2:资源element',
  `METHOD` varchar(10) DEFAULT NULL COMMENT '访问方式 GET POST PUT DELETE PATCH',
  `ICON` varchar(100) DEFAULT NULL COMMENT '图标',
  `STATUS` smallint(4) DEFAULT '1' COMMENT '状态   1:正常、9：禁用',
  `CREATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `UPDATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COMMENT='资源信息表(菜单,资源)';

INSERT INTO `auth_resource` VALUES (null,'ARTICLE_LIST', '文章列表', null, '/article/list', '1', 'POST', NULL,'1',NULL,NULL);
INSERT INTO `auth_resource` VALUES (null,'ARTICLE_ADD', '添加文章', null, '/article/add', '2', 'POST', NULL,'1',NULL,NULL);
INSERT INTO `auth_resource` VALUES (null,'ARTICLE_DELETE', '删除文章', null, '/article/delete', '2', 'POST', NULL,'1',NULL,NULL);
INSERT INTO `auth_resource` VALUES (null,'ARTICLE_UPDATE', '修改文章', null, '/article/update', '2', 'POST', NULL,'1',NULL,NULL);
INSERT INTO `auth_resource` VALUES (null,'USER_MAGE', '用户管理', null, '/user/**', '1', 'POST', NULL,'1',NULL,NULL);
INSERT INTO `auth_resource` VALUES (null,'ROLE_MAGE', '角色管理', null, '/role/**', '1', 'POST', NULL,'1',NULL,NULL);
INSERT INTO `auth_resource` VALUES (null,'RESOURCE_MAGE', '资源管理', null, '/resource/**', '1', 'POST', NULL,'1',NULL,NULL);
INSERT INTO `auth_resource` VALUES (null,'ONLINES', '在线用户', null, '/onlines/**', '1', 'POST', NULL,'1',NULL,NULL);

DROP TABLE IF EXISTS `auth_role`;
CREATE TABLE `auth_role` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `CODE` varchar(20) NOT NULL COMMENT '角色名称',
  `NAME` varchar(20) DEFAULT NULL COMMENT '角色描述',
  `STATUS` smallint(4) DEFAULT '1' COMMENT '状态   1:正常、9：禁用',
  `CREATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `UPDATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COMMENT='角色信息表';

INSERT INTO `auth_role` VALUES (null,'role_admin', '系统管理员角色', '1',NULL,NULL);
INSERT INTO `auth_role` VALUES (null,'role_member', '成员角色', '1',NULL,NULL);
INSERT INTO `auth_role` VALUES (null,'role_user', '用户角色', '1',NULL,NULL);
INSERT INTO `auth_role` VALUES (null,'role_guest', '访客角色', '1',NULL,NULL);
INSERT INTO `auth_role` VALUES (null,'role_anon', '非角色', '1',NULL,NULL);


DROP TABLE IF EXISTS `auth_role_resource`;
CREATE TABLE `auth_role_resource` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `ROLE_ID` int(11) NOT NULL COMMENT '角色ID',
  `RESOURCE_ID` int(11) NOT NULL COMMENT '资源ID',
  `CREATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `UPDATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`ID`),
  UNIQUE (ROLE_ID,RESOURCE_ID)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='资源角色关联表';

INSERT INTO `auth_role_resource` VALUES (null,'100', '100', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'101', '102', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'102', '100', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'103', '102', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'100', '101', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'101', '100', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'103', '101', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'103', '103', NULL, NULL);
INSERT INTO `auth_role_resource` VALUES (null,'102', '103', NULL, NULL);


DROP TABLE IF EXISTS `auth_user`;

CREATE TABLE `auth_user` (
  `uid` varchar(20) NOT NULL  COMMENT 'uid,用户账号,主键',
  `username` varchar(20) NOT NULL COMMENT '用户名(nick_name)',
  `password` varchar(50) NOT NULL COMMENT '密码(MD5(密码+盐))',
  `salt` varchar(20) DEFAULT NULL COMMENT '盐',
  `real_name` varchar(20) DEFAULT NULL COMMENT '用户真名',
  `avatar` varchar(100) DEFAULT NULL COMMENT '头像',
  `phone` varchar(20) DEFAULT NULL UNIQUE COMMENT '电话号码(唯一)',
  `email` varchar(20) DEFAULT NULL UNIQUE COMMENT '邮件地址(唯一)',
  `sex` tinyint(4) DEFAULT NULL COMMENT '性别(1.男 2.女)',
  `status` tinyint(4) DEFAULT NULL COMMENT '账户状态(1.正常 2.锁定 3.删除 4.非法)',
  `CREATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `UPDATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `CREATE_WHERE` tinyint(4) DEFAULT NULL COMMENT '创建来源(1.web 2.android 3.ios 4.win 5.macos 6.ubuntu)',
  PRIMARY KEY (`uid`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';

INSERT INTO `auth_user` VALUES ('3a50b', 'editor', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '小编', null, '111', null, null,null, '2017-12-15 11:48:45', null, null);
INSERT INTO `auth_user` VALUES ('5202f', 'admin', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '管理员', null, '3222',null, null,null, '2017-12-15 11:47:47', null, null);
INSERT INTO `auth_user` VALUES ('c0085', 'chief', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '主编', null, '3333', null, null,null, '2017-12-15 11:49:05', null, null);
INSERT INTO `auth_user` VALUES ('dbec2', 'guest', '2bf376c56d7d8c740519c06522272a54','2bf376c56d7', '访客', null, '4444', null, null,null, '2017-12-15 11:48:15', null, null);

DROP TABLE IF EXISTS `auth_user_role`;
CREATE TABLE `auth_user_role` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户角色关联表主键',
  `USER_ID` varchar(20) NOT NULL COMMENT '用户UID',
  `ROLE_ID` int(11) NOT NULL COMMENT '角色ID',
  `CREATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `UPDATE_TIME` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='用户角色关联表';
INSERT INTO `auth_user_role` VALUES (null,'3a50b', '100', NULL, NULL);
INSERT INTO `auth_user_role` VALUES (null,'5202f', '101', NULL, NULL);
INSERT INTO `auth_user_role` VALUES (null,'c0085', '102', NULL, NULL);
INSERT INTO `auth_user_role` VALUES (null,'dbec2', '103', NULL, NULL);
INSERT INTO `auth_user_role` VALUES (null,'c0085', '104', NULL, NULL);

commit;