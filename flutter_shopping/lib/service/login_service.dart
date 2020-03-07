import 'package:dio/dio.dart';
import 'package:flutter_shopping/api/api.dart';
import 'package:flutter_shopping/http/dio.dart';
import 'package:flutter_shopping/model/user.dart';

Dio dio = DioUtil.getInstance().dio;

class LoginService {
  static Future<Response> login(User data) async {
    String url = '${Api.DO_LOGIN}';
    FormData formData = FormData.fromMap(data.toJson());
    var response = await dio.post(url, data: formData);
    return response;
  }
}
