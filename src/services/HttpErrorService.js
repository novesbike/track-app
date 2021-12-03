import * as NavigationService from "./navigation";

function HttpErrorsService(response) {
  console.log(response);
  switch (response.status) {
    case 401:
    case 403:
      NavigationService.goToLogin();
      break;

    case 404: //teste
      NavigationService.goToScreenError();
      break;

    default:
      if (response.status >= 500) {
        NavigationService.goToScreenError();
      }
  }
}

export default HttpErrorsService;
