export interface PeopleProps {
  album: string;
  fullName: string;
  group: string;
  topic: string | undefined;
}

export function isEmptyOrSpaces(str: string) {
  return str === null || str.match(/^ *$/) !== null;
}

export function compare(a: PeopleProps, b: PeopleProps) {
  if (a.group > b.group) return 1;
  if (a.group < b.group) return -1;
  if (a.topic !== undefined && b.topic !== undefined) {
    if (a.topic > b.topic) return 1;
    if (a.topic < b.topic) return -1;
  }

  return 0;
}
