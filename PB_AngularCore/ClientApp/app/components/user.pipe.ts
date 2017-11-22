import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'formatName'
})

// Converts string into pascal notation (first upper, rest lower)
export class FormatUserNamePipe implements PipeTransform {
    transform(value: string): string { // returns string
        if (!value || value.length < 1) return "";

        return value[0].toUpperCase() + value.substring(1).toLowerCase();

    }
}