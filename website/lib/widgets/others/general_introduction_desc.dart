import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:personal_website/theme/colors.dart';
import 'package:personal_website/theme/styles.dart';
import 'package:personal_website/utils/app_utils.dart';

class GeneralIntroductionDesc extends StatefulWidget {
  const GeneralIntroductionDesc({Key? key}) : super(key: key);

  @override
  State<GeneralIntroductionDesc> createState() =>
      _GeneralIntroductionDescState();
}

class _GeneralIntroductionDescState extends State<GeneralIntroductionDesc> {
  TextDecoration decoration = TextDecoration.none;

  @override
  Widget build(BuildContext context) {
    return SelectableText.rich(
      TextSpan(
        text:
            "I'm a software engineer specializing develop mobile application using Flutter. Currently, I'm focused on develop mobile application at ",
        style: TextStyles.heeboText.copyWith(fontSize: 20),
        children: [
          TextSpan(
            recognizer: TapGestureRecognizer()
              ..onTap = () {
                AppUtils.openLink('https://getnerdify.com/');
              },
            mouseCursor: MaterialStateMouseCursor.clickable,
            onEnter: (event) {
              setState(() {
                decoration = TextDecoration.underline;
              });
            },
            onExit: (event) {
              setState(() {
                decoration = TextDecoration.none;
              });
            },
            text: 'Nerdify',
            style: TextStyles.heeboText.copyWith(fontSize: 20.h),
          ),
          const TextSpan(text: '.'),
        ],
      ),
    );
  }
}
