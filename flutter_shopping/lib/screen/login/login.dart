import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_shopping/model/user.dart';
import 'package:flutter_shopping/router/application.dart';
import 'package:flutter_shopping/service/login_service.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();

  TextEditingController _unameController = new TextEditingController();

  TextEditingController _pwdController = new TextEditingController();

  User user;

  LoginService loginService = new LoginService();

  String token;

  Map<String, bool> _autoValidate = {
    'form': false,
    'name': false,
    'pwd': false,
    'valCode': false,
  };

  void submit() {
    if (_formKey.currentState.validate()) {
      // 保存表单数据
      _formKey.currentState.save();

      Map<String, dynamic> _user = {
        'username': _unameController.text,
        'password': _pwdController.text
      };
      this.user = User.fromJson(_user);
      this.loginHttp();
      print(user.username);
    } else {
      setState(() {
        _autoValidate['form'] = true;
      });
    }
  }

  void loginHttp() {
    LoginService.login(this.user).then((Response response) {
      if (!response.data['access_token'].isEmpty) {
        this.token = response.data['access_token'];
        Application.router.navigateTo(context, '/home');
        LoginService.setToken(token);

//
//      Application.router
//          .navigateTo(context, "/home?id=1", replace: true, clearStack: true);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('登录页'),
      ),
      body: new Padding(
        padding: EdgeInsets.all(16.00),
        child: new Form(
          key: _formKey,
          child: new Column(
            children: <Widget>[
              new Container(
                child: new TextFormField(
                  controller: _unameController,
                  decoration: new InputDecoration(
                    labelText: '用户名',
                    prefixIcon: Icon(Icons.account_box),
                  ),
                  // 校验用户名（不能为空）
                  autovalidate: _autoValidate['form'] || _autoValidate['name'],
                  validator: (v) {
                    return v.trim().isNotEmpty ? null : '用户名不能为空';
                  },
                  onTap: () {
                    setState(() {
                      _autoValidate['name'] = true;
                    });
                  },
                ),
                height: 80.00,
              ),
              new Container(
                child: new TextFormField(
                  controller: _pwdController,
                  decoration: new InputDecoration(
                    labelText: '密码',
                    prefixIcon: Icon(Icons.lock),
                  ),
                  // 校验用户
                  autovalidate: _autoValidate['form'] || _autoValidate['pwd'],
                  // 名（不能为
                  validator: (v) {
                    return v.trim().isNotEmpty ? null : '密码不能为空';
                  },
                  onTap: () {
                    setState(() {
                      _autoValidate['pwd'] = true;
                    });
                  },
                ),
                height: 100.00,
              ),
              new Padding(
                padding: const EdgeInsets.only(top: 25),
                child: ConstrainedBox(
                  constraints: BoxConstraints.expand(height: 55.0),
                  child: RaisedButton(
                    color: Theme.of(context).primaryColor,
                    onPressed: submit,
                    textColor: Colors.white,
                    child: Text('登录'),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
