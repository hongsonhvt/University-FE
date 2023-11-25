type Name = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
};

export class StringHelper {
  static shortName(name: Name): string {
    const { firstName, lastName } = this.normalize(name);
    return `${firstName} ${lastName}`;
  }

  static shortNameWithMiddle(name: Name): string {
    if (!name.middleName) return this.shortName(name);

    const { firstName, middleName, lastName } = this.normalize(name);
    return `${firstName} ${middleName[0]}. ${lastName}`;
  }

  static fullName(name: Name): string {
    if (!name.middleName) return this.shortNameWithMiddle(name);

    const { firstName, middleName, lastName } = this.normalize(name);
    return `${firstName} ${middleName} ${lastName}`;
  }

  private static normalize(name: Name): Required<Name> {
    const firstName = name.firstName ?? '';
    const middleName = name.middleName ?? '';
    const lastName = name.lastName ?? '';

    return {
      firstName,
      middleName,
      lastName,
    };
  }
}
