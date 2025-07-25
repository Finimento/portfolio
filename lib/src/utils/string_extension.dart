extension StringExtension on String {
  String capitalize() {
    if (trim().isEmpty) return "";
    return split(" ").map((element) {
      return "${element[0].toUpperCase()}${element.substring(1).toLowerCase()}";
    }).join(" ");
  }
}

/// for using svg in assets
extension SVGForWeb on String {
  String forWeb({required bool web}) => web ? this.replaceFirst('assets/','') : this;
}
