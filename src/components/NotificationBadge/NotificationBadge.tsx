import NotificationBadgeStyles from "./NotificationBadge.module.scss";

interface NotificationBadgeProps {
  nbrPosts: number;
}

export default function NotificationBadge({
  nbrPosts,
}: NotificationBadgeProps) {
  return (
    <span className={NotificationBadgeStyles.notificationBadge}>
      +{nbrPosts}
    </span>
  );
}
