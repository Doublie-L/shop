import 'package:flutter/material.dart';

class NotFoundPage extends StatefulWidget {
  @override
  _NotFoundState createState() => _NotFoundState();
}

class _NotFoundState extends State<NotFoundPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('404'),
      ),
    );
  }
}
