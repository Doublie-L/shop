import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';
import 'package:flutter_shopping/screen/home_page/homePage.dart';
import 'package:flutter_shopping/screen/login/login.dart';
import 'package:flutter_shopping/screen/not_found/404.dart';

Handler homePageHandler = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
  return HomePage();
});

Handler notFoundHandler = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
  return NotFoundPage();
});

Handler loginPageHandler = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
  return LoginPage();
});
