export class MemberEntryUseCase {
  constructor(input) {
    this._input = input;
  }

  inputMemberValidate() {
    return !Object.keys(this._input).some(key => !this._input[key]);
  }

  saveInputMemberData() {}
}
