import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();

  TextEditingController _unameController = new TextEditingController();

  TextEditingController _pwdController = new TextEditingController();

  Map<String, bool> _autoValidate = {
    'form': false,
    'name': false,
    'pwd': false,
    'valCode': false,
  };

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
                    onPressed: () {},
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
