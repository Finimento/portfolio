import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:portfolio/src/common/widgets/responsive.dart';
import 'package:portfolio/src/constants/sizes.dart';
import 'package:portfolio/src/features/personal_info/data/personal_info_repository.dart';
import 'package:portfolio/src/features/personal_info/domain/resume.dart';
import 'package:portfolio/src/features/personal_info/presentation/widgets/contact_bar.dart';
import 'package:portfolio/src/features/personal_info/presentation/widgets/resume_button.dart';
import 'package:portfolio/src/localization/generated/locale_keys.g.dart';

class PersonalInfoDesktop extends ConsumerWidget {
  const PersonalInfoDesktop({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final resumes = ref.watch(personalInfoRepositoryProvider).getResumes();
    final contacts = ref.watch(personalInfoRepositoryProvider).getContacts();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FittedBox(
          child: Text(
            tr(LocaleKeys.name),
            style: Theme.of(context).textTheme.displayLarge
          ),
        ),
        gapH20,
        Text(
          tr(LocaleKeys.description),
          style: Theme.of(context).textTheme.titleLarge,
        ),
        gapH8,
        Text(
          tr(LocaleKeys.subDescription),
          style: Theme.of(context).textTheme.bodyLarge,
        ),
        _buildResumeButton(ref, resumes: resumes.toList()),
        const Spacer(),
        gapH8,
        ContactBar(contacts: contacts.toList()),
      ],
    );
  }

  Widget _buildResumeButton(WidgetRef ref, {required List<Resume> resumes}) {
    if (resumes.isEmpty) return const SizedBox.shrink();
    return Column(
      children: [
        gapH40,
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 24),
          child: ResumeButton(resumes: resumes),
        ),
      ],
    );
  }
}
