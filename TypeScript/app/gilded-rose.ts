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
  readonly conjured = 'Conjured Mana Cake'

  updateQuality() {
    for (let item of this.items) {
      if(item.name == this.agedBrie){
        this.updateAgedBrieQuality(item)
      } else if(item.name == this.backstagePasses){
        this.updateBackstagePassesQuality(item)
      } else if(item.name == this.sulfuras) {
          // no change in quality.
      } else if(item.name == this.conjured){
        this.updateConjuredQuality(item)
      } else{
        this.updateNormalItemQuality(item)
      }
    }

    return this.items;
  }

  updateAgedBrieQuality(item: Item){
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality < 50) {
        item.quality = item.quality + 1
    }
  }

  updateBackstagePassesQuality(item:Item){
    if (item.quality < 50) {
      item.quality = item.quality + 1

      if (item.sellIn < 11 && item.quality < 50) {
          item.quality = item.quality + 1
      }
      if (item.sellIn < 6 && item.quality < 50) {
          item.quality = item.quality + 1
      }
    }
    item.sellIn = item.sellIn - 1
    if (item.sellIn < 0) {
        item.quality = 0
    }
  }

  updateConjuredQuality(item: Item){
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
    item.sellIn = item.sellIn - 1
    if(item.sellIn < 0){
      if(item.quality > 0){
        item.quality = item.quality - 1
      }else{
        item.quality = 0
      }
    }
  }

  updateNormalItemQuality(item: Item){
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality > 0) {
            item.quality = item.quality - 1
    }
  }
}
