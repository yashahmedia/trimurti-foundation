export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Media",
    href: "/media",
    children: [
      { label: "Our Media", href: "/media" },
      { label: "Photo Gallery", href: "/media/photos" },
      { label: "Video Gallery", href: "/media/videos" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donor List", href: "/donors" },
  { label: "Compliance", href: "/compliance" },
];
