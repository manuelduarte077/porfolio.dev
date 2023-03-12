import 'dart:html' as html; // ignore: avoid_web_libraries_in_flutter

import 'package:url_launcher/url_launcher.dart';

class AppUtils {
  static Future<void> openLink(String url) async {
    html.window.open(url, '_blank');
  }

  static Future<void> launcher(Uri scheme) async {
    if (await canLaunchUrl(scheme)) {
      await launchUrl(scheme);
    }
  }
}
