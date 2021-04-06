import ChatKitty from 'chatkitty';

export const kitty = ChatKitty.getInstance(
  'b5037fe0-b037-4426-bd87-8b8c39d467ca'
);

export function getChannelDisplayName(channel) {
  if (channel.type === 'DIRECT') {
    return channel.members.map((member) => member.displayName).join(', ');
  } else {
    return channel.name;
  }
}
