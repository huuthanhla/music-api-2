"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("cheerio");
const common_1 = require("@nestjs/common");
let SongParser = class SongParser {
    parse($body) {
        const $songs = $body.find('div.list_music li');
        const self = this;
        const songs = $songs.map(function (i, elem) {
            return self.getSong($(this));
        }).get();
        return songs;
    }
    getSong($song) {
        const $name = $song.find('a.name_song');
        const name = $name.text();
        const $singers = $song.find('a.name_singer');
        const singer = $singers.map(function (i, elem) {
            return $(this).text();
        }).get().join(', ');
        const $url = $song.find('a.button_playing');
        const url = $url.attr('href');
        return { name, singer, url };
    }
};
SongParser = __decorate([
    common_1.Component()
], SongParser);
exports.SongParser = SongParser;
//# sourceMappingURL=song.parser.js.map