import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:personal_website/data/data.dart';
import 'package:personal_website/theme/colors.dart';

class ExperienceDetailTitle extends StatelessWidget {
  const ExperienceDetailTitle({
    Key? key,
    required this.onTap,
    required this.selectedIndex,
    required this.index,
  }) : super(key: key);

  final Function() onTap;
  final int selectedIndex;
  final int index;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: 5.h,
          height: 60.h,
          decoration: BoxDecoration(
            color: selectedIndex == index
                ? AppColor.primaryColor
                : AppColor.textColor2,
            borderRadius: BorderRadius.all(Radius.circular(5.h)),
          ),
        ),
        SizedBox(
          // height: 60.h,
          // child: TextButtonCustom(
          //   onPressed: onTap,
          //   label: listExperience[index].companyName,
          //   isUseOverlayColor: true,
          //   // padding: EdgeInsets.symmetric(
          //   //   vertical: 20.h,
          //   //   horizontal: 10.h,
          //   // ),
          //   textColor: selectedIndex == index
          //       ? AppColor.primaryColor
          //       : AppColor.textColor1,
          // ),
          child: TextButton(
            onPressed: onTap,
            child: Text(
              listExperience[index].companyName,
              style: TextStyle(
                color: selectedIndex == index
                    ? AppColor.primaryColor
                    : AppColor.textColor1,
                fontSize: 20.h,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
