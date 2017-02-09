module powerbi.extensibility.visual.PBI_CV_980B8DC8_C66B_4CB8_BA8B_35787E5A5CC6  {
    export function getValue<T>(objects: DataViewObjects, objectName: string, propertyName: string, defaultValue: T ): T {
        if(objects) {
            let object = objects[objectName];
            if(object) {
                let property: T = <T>object[propertyName];
                if(property !== undefined) {
                    return property;
                }
            }
        }
        return defaultValue;
    }

    export function getFillValue(objects: DataViewObjects, objectName: string, propertyName: string, defaultValue: string ): string {
        if(objects) {
            let object = objects[objectName];
            if(object) {
                let fill: Fill = <Fill>object[propertyName];
                if(fill !== undefined && fill.solid !== undefined && fill.solid.color !== undefined) {
                    return fill.solid.color;
                }
            }
        }
        return defaultValue;
    }
}