import 'package:dio/dio.dart';
import 'package:flutter_shopping/api/api.dart';
import 'package:flutter_shopping/http/dio.dart';

Dio dio = DioUtil.getInstance().dio;

class HomeService {
  static Future<Response> getUser() async {
    String url = '${Api.All_USER}';
    var response = await dio.get(url);
    return response;
  }


}
