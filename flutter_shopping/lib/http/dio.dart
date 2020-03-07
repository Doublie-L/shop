import 'package:dio/dio.dart';

class DioUtil {
  Dio dio;
  String token;
  String refreshToken;
  static DioUtil dioUtil;

  static DioUtil getInstance() {
    if (dioUtil == null) {
      dioUtil = new DioUtil();
      Dio dio = new Dio();

      // 设置token
      dio.interceptors
          .add(InterceptorsWrapper(onRequest: (Options options) async {
        // 这里添加请求拦截

        return options; //continue
      }, onResponse: (Response response) async {
        // 这里添加响应拦截

        return response;
      }, onError: (DioError error) async {
        // 这是添加报错拦截

        return error.response;
      }));

      dioUtil.dio = dio;
    }
    return dioUtil;
  }

  static void setToken(String token) {
    dioUtil.token = token;
  }

  static void setRefreshToken(String refreshToken) {
    dioUtil.refreshToken = refreshToken;
  }

  static void setCookie() {}
}
