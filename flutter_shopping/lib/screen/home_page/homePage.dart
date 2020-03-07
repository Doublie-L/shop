import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_shopping/router/application.dart';
import 'package:flutter_shopping/service/home_service.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  getAllUser() {
    HomeService.getUser().then((Response response) {
      print(response.data);
//
//      Application.router
//          .navigateTo(context, "/home?id=1", replace: true, clearStack: true);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: new RaisedButton(
          child: Text('跳转到登录页'),
          onPressed: getAllUser,
        ),
      ),
    );
  }
}
