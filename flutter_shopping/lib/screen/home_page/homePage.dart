import 'package:flutter/material.dart';
import 'package:flutter_shopping/router/application.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: new RaisedButton(
          child: Text('跳转到登录页'),
          onPressed: () {
            Application.router.navigateTo(context, '/1');
          },
        ),
      ),
    );
  }
}
