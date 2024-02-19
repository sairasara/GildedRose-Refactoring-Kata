export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  readonly agedBrie = 'Aged Brie'
  readonly backstagePasses = 'Backstage passes to a TAFKAL80ETC concert'
  readonly sulfuras = 'Sulfuras, Hand of Ragnaros'

  updateQuality() {
    for (let item of this.items) {
      if (item.name != this.agedBrie && item.name != this.backstagePasses) {
        if (item.quality > 0) {
          if (item.name != this.sulfuras) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name == this.backstagePasses) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }
      if (item.name != this.sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != this.agedBrie) {
          if (item.name != this.backstagePasses) {
            if (item.quality > 0) {
              if (item.name != this.sulfuras) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
