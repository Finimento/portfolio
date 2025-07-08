import 'dart:ui';

import 'package:easy_localization/easy_localization.dart';
// ignore: implementation_imports
import 'package:easy_localization/src/easy_localization_controller.dart';
import 'package:portfolio/src/localization/app_localizations.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

final localeControllerProvider =
FutureProvider<EasyLocalizationController>((ref) async {
  final supportedLocales = await AppLocalizations.supportedLocales();
  return EasyLocalizationController(
    supportedLocales: supportedLocales,
    path: AppLocalizations.translationsPath,
    fallbackLocale: const Locale('de'), // ← hier auf Deutsch umgestellt
    useFallbackTranslations: true,
    saveLocale: true,
    assetLoader: const RootBundleAssetLoader(),
    useOnlyLangCode: false,
    onLoadError: (_) {},
  );
});