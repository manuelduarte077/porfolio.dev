import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

Widget verticalSpace(double v) {
  return SizedBox(height: v);
}

Widget horizontalSpace(double v) {
  return SizedBox(width: v);
}

class TextStyles {
  static TextStyle interCodeText =
      GoogleFonts.inter().copyWith(fontWeight: FontWeight.w400, fontSize: 16.h);

  static TextStyle heeboText =
      GoogleFonts.heebo().copyWith(fontWeight: FontWeight.w400, fontSize: 14.h);
}
