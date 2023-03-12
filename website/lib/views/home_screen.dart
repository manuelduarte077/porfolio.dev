import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'package:personal_website/widgets/widgets.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final itemScrollController = ItemScrollController();

  List<Widget> contents = const [
    /// General Introduction
    GeneralIntroduction(),

    /// About
    About(),

    /// Experience
    Experience(),

    /// Work
    Project(),
    ProjectOther(),

    /// Contact
    Contact(),

    /// Footer
    Footer(),
  ];

  Future<void> contentNavigation(int index) async {
    await itemScrollController.scrollTo(
      index: index,
      curve: Curves.ease,
      duration: const Duration(seconds: 1),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      endDrawer: DrawerCustom(
        onPressedAbout: () {
          contentNavigation(1);
        },
        onPressedContact: () {
          contentNavigation(5);
        },
        onPressedExperience: () {
          contentNavigation(2);
        },
        onPressedWork: () {
          contentNavigation(3);
        },
      ),
      appBar: AppBarCustom(
        onPressedAbout: () {
          contentNavigation(1);
        },
        onPressedContact: () {
          contentNavigation(5);
        },
        onPressedExperience: () {
          contentNavigation(2);
        },
        onPressedWork: () {
          contentNavigation(3);
        },
      ),
      body: Stack(
        children: [
          ScrollablePositionedList.builder(
            padding: EdgeInsets.symmetric(
              horizontal:
                  MediaQuery.of(context).size.width < 960 ? 50.h : 250.h,
            ),
            itemScrollController: itemScrollController,
            itemCount: contents.length,
            itemBuilder: (context, index) {
              return contents[index];
            },
          ),
          if (MediaQuery.of(context).size.width < 960)
            const SizedBox()
          else
            const FloatingLeftButton(),
          if (MediaQuery.of(context).size.width < 960)
            const SizedBox()
          else
            const FloatingRightButton(),
        ],
      ),
    );
  }
}
