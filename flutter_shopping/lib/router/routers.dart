import 'package:fluro/fluro.dart';

import './router_handler.dart';

class Routes {

  //配置类

  static String root = '/'; //根目录

  static String homePage = '/home'; //详情页面

  static String notFound = '/404'; //详情页面

  //静态方法

  static void configureRoutes(Router router) {

    //路由配置


    //找不到路由

    router.notFoundHandler = notFoundHandler;

    //整体配置

    router.define(root, handler: loginPageHandler);

    router.define(homePage, handler: homePageHandler);

    router.define(notFound, handler: notFoundHandler);

  }
}
