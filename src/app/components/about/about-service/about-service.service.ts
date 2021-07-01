import { EventEmitter, Injectable } from "@angular/core";


@Injectable()

export class AboutService  {

  info:{title:string , content:string}|any = [
    {
      title: 'نبذة عن الكلية',
      content: 'إنها نبذة الكلية أيها العبد واعلم ان الله يرى كل ما تفعل',
    },
    {
      title: 'الرسالة',
      content: 'عذااااااااااااااااااااااااااااااااااااااب القبر يا بن آدم متر في متر ونص',
    },
    {
      title: 'الرؤية',
      content: 'ولا تحسبن الله بغافل عما يعمل الظالمون ',
    },
    {
      title: 'الأهداف',
      content: 'إن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكم إن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكعم الذي يتمناه الجميع لا بما تشتهى أنفسكمإن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تكفى الجميع بالكم الذي يتمناه الجميع لا بما تشتهى أنفسكم',
    },
    {
      title: 'مشاكل التعليم',
      content: 'إن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تعجب الجميع بالكم الذي يتمناه الجميع لا بما تشتهى أنفسكم',
    },
    {
      title: 'خدمة المجتمع',
      content: 'إن كنتم ترون أن إيصال العلم عن طريق الحلوى فلا بد من ضبط الحلوى كيف تعجب الجميع بالكم الذي يتمناه الجميع لا بما تشتهى أنفسكم',
    },
  ];

  obj = new EventEmitter<{title:string , content:string}>();
  currentObj: number |any;

  getInfo(){
    return this.info.slice();
  }
  getInfoLength(){
    return this.info.length;
  }

  getSingleInfo(id:number){
    return this.info[id];
  }

}