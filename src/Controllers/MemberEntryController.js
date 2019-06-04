export class MemberEntryController {
  constructor({ memberEntryUseCase }) {
    this._memberUseCase = memberEntryUseCase;
  }

  errorService(e) {
    throw e;
  }

  excute() {
    try {
      const validateResult = this._memberUseCase.inputMemberValidate();
      if (!validateResult) throw "Validate Error";
    } catch (e) {
      this.errorService(e);
    }
  }
}
