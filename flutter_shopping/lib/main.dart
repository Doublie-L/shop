import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:flutter_shopping/router/application.dart';
import 'package:flutter_shopping/router/routers.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {


    final router = Router(); //路由初始化

    Routes.configureRoutes(router);

    Application.router = router;

    return MaterialApp(
      title: 'Flutter Demo',
      onGenerateRoute: Application.router.generator,
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
    );
  }
}
