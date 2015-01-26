#include <stdio.h>
#include <stdlib.h>
#include <node.h>

#include "Check.h"
#include "VsString.h"
#include "VsJson.h"

using namespace v8;

Persistent<Function> Check::constructor;

Check::Check()
{
    this->initBunchMap();

    struct VsString* jsonStr = vs_json_object_to_string(this->bunchMap);
    vs_string_print(jsonStr);
    vs_string_destroy(jsonStr);
}

Check::~Check()
{
    vs_json_object_destroy(this->bunchMap);
}

void Check::initBunchMap()
{
    struct VsJsonObject* obj = vs_json_object_init("{}");
    vs_json_object_set_string(obj, "11", "10000000");
    vs_json_object_set_string(obj, "21", "01000000");
    vs_json_object_set_string(obj, "31", "00100000");
    vs_json_object_set_string(obj, "41", "00010000");
    vs_json_object_set_string(obj, "51", "00001000");
    vs_json_object_set_string(obj, "61", "00000100");
    vs_json_object_set_string(obj, "71", "00000010");
    vs_json_object_set_string(obj, "81", "00000001");
    vs_json_object_set_string(obj, "23", "11000000");
    vs_json_object_set_string(obj, "36", "11000000");
    vs_json_object_set_string(obj, "37", "11100000");
    vs_json_object_set_string(obj, "410", "11000000");
    vs_json_object_set_string(obj, "414", "11100000");
    vs_json_object_set_string(obj, "415", "11110000");
    vs_json_object_set_string(obj, "515", "11000000");
    vs_json_object_set_string(obj, "525", "11100000");
    vs_json_object_set_string(obj, "530", "11110000");
    vs_json_object_set_string(obj, "531", "11111000");
    vs_json_object_set_string(obj, "621", "11000000");
    vs_json_object_set_string(obj, "641", "11100000");
    vs_json_object_set_string(obj, "656", "11110000");
    vs_json_object_set_string(obj, "662", "11111000");
    vs_json_object_set_string(obj, "663", "11111100");
    vs_json_object_set_string(obj, "7127", "11111110");
    vs_json_object_set_string(obj, "8255", "11111111");
    vs_json_object_set_string(obj, "33", "01000000");
    vs_json_object_set_string(obj, "34", "01100000");
    vs_json_object_set_string(obj, "46", "01000000");
    vs_json_object_set_string(obj, "411", "01110000");
    vs_json_object_set_string(obj, "510", "01000000");
    vs_json_object_set_string(obj, "520", "01100000");
    vs_json_object_set_string(obj, "526", "01111000");
    vs_json_object_set_string(obj, "615", "01000000");
    vs_json_object_set_string(obj, "635", "01100000");
    vs_json_object_set_string(obj, "650", "01110000");
    vs_json_object_set_string(obj, "657", "01111100");
    vs_json_object_set_string(obj, "7120", "01111110");
    vs_json_object_set_string(obj, "8247", "01111111");
    vs_json_object_set_string(obj, "44", "00100000");
    vs_json_object_set_string(obj, "45", "00110000");
    vs_json_object_set_string(obj, "516", "00111000");
    vs_json_object_set_string(obj, "620", "00100000");
    vs_json_object_set_string(obj, "642", "00111100");
    vs_json_object_set_string(obj, "55", "00010000");
    vs_json_object_set_string(obj, "56", "00011000");
    vs_json_object_set_string(obj, "622", "00011100");
    vs_json_object_set_string(obj, "735", "00010000");
    vs_json_object_set_string(obj, "870", "00010000");
    vs_json_object_set_string(obj, "66", "00001000");
    vs_json_object_set_string(obj, "67", "00001100");
    vs_json_object_set_string(obj, "721", "00001000");
    vs_json_object_set_string(obj, "856", "00001000");
    vs_json_object_set_string(obj, "77", "00000100");
    vs_json_object_set_string(obj, "78", "00000110");
    vs_json_object_set_string(obj, "828", "00000100");
    vs_json_object_set_string(obj, "88", "00000010");
    vs_json_object_set_string(obj, "89", "00000011");
    this->bunchMap = obj;
}

void Check::Init()
{
    Local<FunctionTemplate> tpl = FunctionTemplate::New(New);
    tpl->SetClassName(String::NewSymbol("Check"));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->PrototypeTemplate()->Set(String::NewSymbol("count0100"), FunctionTemplate::New(Count0100)->GetFunction());
    constructor = Persistent<Function>::New(tpl->GetFunction());
}

/**
 * 真正初始化的方法
 */
Handle<Value> Check::New(const Arguments& args)
{
    HandleScope scope;
    if(args.IsConstructCall()){ //from new GradeLevel()
        Check * obj = new Check();
        obj->Wrap(args.This());
        return args.This();
    }
    else{   //from Check()
        const int argc = 0;
        Local<Value> argv[argc] = {};
        return scope.Close(constructor->NewInstance(argc, argv));
    }
}

/**
 * Init方法中已经初始化过constructor变量，所以在这儿可以使用
 * constructor来新建一个对象。
 */
Handle<Value> Check::NewInstance(const Arguments& args)
{
    HandleScope scope;
    const unsigned argc = 0;
    Handle<Value> argv[argc] = {};
    Local<Object> instance = constructor->NewInstance(argc, argv);
    return scope.Close(instance);
}

/**
 * 获得号码串
 */
struct VsString* Check::getNumber(Local<Object> pObj)
{
    //获得号码的字符串
    Local<String> pNum = pObj->Get(String::NewSymbol("number"))->ToString();
    int length = pNum->Utf8Length();
    struct VsString* str = vs_string_init(NULL, -1L, length + 1);
    pNum->WriteUtf8(str->pt);
    str->length = length;
    *(str->pt + str->length) = '\0';
    return str;
}

/**
 * 获得号码串
 */
struct VsString* Check::getBetType(Local<Object> pObj)
{
    //获得号码的字符串
    Local<String> pNum = pObj->Get(String::NewSymbol("bType"))->ToString();
    int length = pNum->Utf8Length();
    struct VsString* str = vs_string_init(NULL, -1L, length + 1);
    pNum->WriteUtf8(str->pt);
    str->length = length;
    *(str->pt + str->length) = '\0';
    return str;
}

//获得场次及号码串、选项、赔率等信息
struct VsJsonObject* Check::getNumberObj(struct VsString* number, struct VsString* betType)
{
    struct VsJsonObject* numberObj = vs_json_object_init("{}");
    struct VsJsonValue* dataArray = vs_json_value_init("[]");
    vs_json_object_set(numberObj, "data", dataArray);
    vs_json_object_set_string(numberObj, "betType", betType->pt);

    vs_string_print(number);
    struct VsStringList* list = vs_string_split(number, ';');
    for(int i = 0; i < list->length; i++)
    {
        struct VsString* match = vs_string_list_get(list, i);
        struct VsStringList* matchList = vs_string_split(match, '|');
        struct VsString* playType = vs_string_list_get(matchList, 0);
        struct VsString* matchCode = vs_string_list_get(matchList, 1);
        struct VsString* choice = vs_string_list_get(matchList, 2);

        struct VsJsonValue* obj = vs_json_value_init("{}");
        vs_json_object_set_string(obj->objectValue, "playType", playType->pt);
        vs_json_object_set_string(obj->objectValue, "matchCode", matchCode->pt);

        struct VsStringList* choiceList = vs_string_split(choice, ',');
        struct VsJsonValue* choiceArray = vs_json_value_init("[]");
        for(int j = 0; j < choiceList->length; j++)
        {
            struct VsString* str = vs_string_list_get(choiceList, j);
            struct VsStringList* choiceOptionList = vs_string_split(str, '@');
            struct VsString* option = vs_string_list_get(choiceOptionList, 0);
            struct VsString* odds = vs_string_list_get(choiceOptionList, 1);

            struct VsJsonValue* choiceObj = vs_json_value_init("{}");
            vs_json_object_set(choiceObj->objectValue, option->pt, odds->pt);
            vs_json_array_set(choiceArray->arrayValue, j, choiceObj);

            vs_string_list_destroy(choiceOptionList);
        }
        vs_json_object_set(obj->objectValue, "choice", choiceArray);
        vs_string_list_destroy(choiceList);

        vs_json_array_set(dataArray->arrayValue, i, obj);
        vs_string_list_destroy(matchList);
    }
    vs_string_list_destroy(list);
    return numberObj;
}

/**
 * 让球胜平负
 */
Handle<Value> Check::Count0100(const Arguments& args)
{
    HandleScope scope;
    Check *self = ObjectWrap::Unwrap<Check>(args.This());
    Local<Object> pObj = Local<Object>::Cast(args[0]);
    Handle<Array> array = Array::New();

    struct VsString* number = self->getNumber(pObj);
    struct VsString* betType = self->getBetType(pObj);
    struct VsJsonObject* numberObj = self->getNumberObj(number, betType);

    struct VsString* jsonStr = vs_json_object_to_string(numberObj);
    vs_string_print(jsonStr);
    vs_string_destroy(jsonStr);

    vs_string_destroy(betType);
    vs_string_destroy(number);
    vs_json_object_destroy(numberObj);
    return scope.Close(array);
}

