import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:personal_website/cubits/cubits.dart';
import 'package:personal_website/views/home_screen.dart';

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final darkMode = context.watch<DarkModeCubit>().state;

    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);

    return ScreenUtilInit(
      designSize: const Size(1920, 1080),
      builder: (context, child) {
        return MaterialApp(
          theme: darkMode
              ? ThemeData.dark(
                  useMaterial3: true,
                )
              : ThemeData.light(
                  useMaterial3: true,
                ),
          themeMode: darkMode ? ThemeMode.dark : ThemeMode.light,
          darkTheme: ThemeData.dark(useMaterial3: true),
          home: const HomeScreen(),
        );
      },
    );
  }
}
