import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:personal_website/app/app.dart';
import 'package:personal_website/cubits/cubits.dart';

void main() {
  runApp(
    BlocProvider(
      create: (context) => DarkModeCubit(false),
      child: const MyApp(),
    ),
  );
}
