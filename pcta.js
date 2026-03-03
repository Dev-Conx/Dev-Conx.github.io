// Track selected components by category
const selectedComponents = {
    'Processor': null,
    'Motherboard': null,
    'Storage - Primary SSD': null,
    'Storage - Mass HDD': null,
    'Graphics Card': null,
    'Memory': null,
    'Power Supply': null
};

window.onload = function() {
const processorButton = document.querySelector('.component-list[onclick="cpuclick()"]');
if (processorButton) {
processorButton.classList.add('active');
}

cpuclick();
addSelectButtonListeners();
};
function cpuclick() {
const grid = document.getElementById('component-grid');
grid.innerHTML = `
      <div class="component-card">
          <div class="card-header">
              <h3 class="component-category">Processor</h3>
              <div class="component-price">Php5,595.00</div>
          </div>
          <div class="card-content">
              <div class="component-info">
                  <div class="component-image">
                      <img src="Components/CPU/Low-end/AMD Ryzen 5 5600.png" alt="AMD Ryzen 5 5600" class="component-img">
                  </div>
                  <div class="component-details">
                      <h4 class="component-name">AMD Ryzen 5 5600</h4>
                      <p class="component-specs">The undisputed value champion, offering exceptional gaming and general performance for its low price.</p>
                      <div class="card-actions">
                          <button class="info-btn"onclick="showimage1()">INFO</button>
                          <button class="select-btn">SELECT</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  


   <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php7,400.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Low-end/Intel_Core_i3-13100F-removebg-preview.png" alt="Intel Core i3-13100F" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Intel Core i3-13100F</h4>
                          <p class="component-specs">A capable budget gaming chip that punches above its weight class, but lacks integrated graphics.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage2()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
<div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php13,050.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Mid-range/AMD Ryzen 5 7600X.png" alt="AMD Ryzen 5 7600" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 5 7600</h4>
                          <p class="component-specs">The entry point to the modern AM5 platform, offering strong future upgradeability and great efficiency.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage3()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php6,295.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Low-end/Intel_Core_i5-12400F-removebg-preview.png" alt="Intel Core i5-12400F" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Intel Core i5-12400F</h4>
                          <p class="component-specs">A reliable and popular 6-core workhorse that delivers smooth 1080p gaming and multitasking.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage4()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php9,633.33</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Low-end/AMD Ryzen 5 5600_X.png" alt="AMD Ryzen 5 5600X" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 5 5600X</h4>
                          <p class="component-specs">A slightly higher-clocked version of the 5600, offering a small performance bump out of the box.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage5()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php15,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Mid-range/AMD Ryzen 7 7800X3D.png" alt="AMD Ryzen 7 7800X3D" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 7 7800X3D</h4>
                          <p class="component-specs">The undisputed king for pure gaming performance, thanks to its massive 3D V-Cache.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage6()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php20,018.52</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Mid-range/Intel Core i5-14600K.png" alt="Intel Core i5-14600K" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Intel Core i5-14600K</h4>
                          <p class="component-specs">An excellent all-rounder that combines strong gaming performance with potent multi-core power for productivity.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage7()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php14,650.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Mid-range/AMD Ryzen 5 7600X.png" alt="AMD Ryzen 5 7600X" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 5 7600X</h4>
                          <p class="component-specs">Strikes a fantastic balance between gaming prowess and productivity tasks at a mid-range price.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage8()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php25,750.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Mid-range/Intel Core i7-13700K.png" alt="Intel Core i7-13700K" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Intel Core i7-13700K</h4>
                          <p class="component-specs">A multi-threading powerhouse, ideal for gamers who also stream or run demanding creative applications.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage9()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php21,085.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/Mid-range/AMD Ryzen 7 7700X.png" alt="AMD Ryzen 7 7700X" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 7 7700X</h4>
                          <p class="component-specs">A solid and fast 8-core CPU that delivers strong performance across both games and productivity workloads.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage10()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php28,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/High-end/AMD Ryzen 9 7950X3D_7900X3D.png" alt="AMD Ryzen 9 7950X3D" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 9 7950X3D</h4>
                          <p class="component-specs">The ultimate hybrid, combining elite gaming performance from its 3D V-Cache cores with massive 16-core productivity power.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage11()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php37,122.22</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/High-end/Intel Core i9-14900K.png" alt="Intel Core i9-14900K" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Intel Core i9-14900K</h4>
                          <p class="component-specs">The peak of raw performance, pushing the highest clock speeds for both single and multi-threaded tasks.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage12()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php34,950.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/High-end/AMD Ryzen 9 7950X.png" alt="AMD Ryzen 9 7950X" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 9 7950X</h4>
                          <p class="component-specs">A productivity workstation king, dominating in heavily multi-threaded applications like rendering and coding.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage13()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php29,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/High-end/Intel Core i9-13900K.png" alt="Intel Core i9-13900K" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Intel Core i9-13900K</h4>
                          <p class="component-specs">A previous-generation flagship that remains a monster, offering performance very close to its successor.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage14()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Processor</h3>
                  <div class="component-price">Php28,495.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/CPU/High-end/AMD Ryzen 9 7900X3D.png" alt="AMD Ryzen 9 7900X3D" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Ryzen 9 7900X3D</h4>
                          <p class="component-specs">A great middle-ground, offering more cores and 3D V-Cache for gaming than the 7800X3D, but at a lower cost than the 7950X3D.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage15()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  `;
grid.scrollTop = 0;

updateActiveButton('cpuclick');
}

function motherboard() {
const grid = document.getElementById('component-grid');
grid.innerHTML = `
       <div class="motherboard">
          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php6,450.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Low-end/MSI PRO B760M-P .png" alt="MSI PRO B760M-P" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">MSI PRO B760M-P</h4>
                          <p class="component-specs">A no-frills, solid foundation for a budget Intel build, covering all the essentials.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage16()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php7,350.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Low-end/ASRock B650M-HDV_M.2.png" alt="ASRock B650M-HDV/M.2" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">ASRock B650M-HDV/M.2</h4>
                          <p class="component-specs">The most basic entry into the AM5 platform, offering core functionality without extra cost.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage17()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php7,950.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Low-end/Gigabyte B760M DS3H.png" alt="Gigabyte B760M DS3H" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Gigabyte B760M DS3H</h4>
                          <p class="component-specs">A reliable and popular budget board known for its stable performance and good connectivity.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage18()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php9,395.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Low-end/MSI PRO B650M-A WIFI.png" alt="MSI PRO B650M-A WIFI" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">MSI PRO B650M-A WIFI</h4>
                          <p class="component-specs">A standout value pick for AM5, combining reliability with the crucial addition of built-in WiFi.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage19()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php5,850.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Low-end/ASRock B550M Pro4.png" alt="ASRock B550M Pro4" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">ASRock B550M Pro4</h4>
                          <p class="component-specs">Offers exceptional value for the older AM4 platform, providing great features for a very low price.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage20()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php16,495.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Mid-range/ASUS TUF GAMING B650-PLUS WIFI.png" alt="ASUS TUF GAMING B650-PLUS WIFI" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">ASUS TUF GAMING B650-PLUS WIFI</h4>
                          <p class="component-specs">The best value workhorse, offering robust build quality, great features, and WiFi at a reasonable price.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage21()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php12,395.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Mid-range/MSI MAG B760 TOMAHAWK WIFI .png" alt="MSI MAG B760 TOMAHAWK WIFI" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">MSI MAG B760 TOMAHAWK WIFI</h4>
                          <p class="component-specs">A renowned all-rounder for Intel, known for its strong power delivery, reliability, and full feature set.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage22()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php13,950.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Mid-range/MSI MAG B650 TOMAHAWK WIFI .png" alt="MSI MAG B650 TOMAHAWK WIFI" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">MSI MAG B650 TOMAHAWK WIFI</h4>
                          <p class="component-specs">The AMD counterpart, providing excellent features and robust VRMs for upper-mid-range CPUs.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage23()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php12,430.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Mid-range/Gigabyte B650 AORUS ELITE AX .png" alt="Gigabyte B650 AORUS ELITE AX" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Gigabyte B650 AORUS ELITE AX</h4>
                          <p class="component-specs">Steps up with more premium aesthetics and enhanced features like better audio and networking.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage24()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php13,750.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/Mid-range/ASUS ROG STRIX B760-F GAMING .png" alt="ASUS ROG STRIX B760-F GAMING" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">ASUS ROG STRIX B760-F GAMING</h4>
                          <p class="component-specs">A feature-rich option for gamers who want premium aesthetics and extras without the X790 chipset price.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage25()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php36,450.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/High-end/ASUS ROG MAXIMUS Z790 HERO.png" alt="ASUS ROG MAXIMUS Z790 HERO" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">ASUS ROG MAXIMUS Z790 HERO</h4>
                          <p class="component-specs">A flagship motherboard built for extreme performance, overclocking, and showcasing a high-end build.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage26()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php27,250.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/High-end/ASUS ROG STRIX X670E-F GAMING.png" alt="ASUS ROG STRIX X670E-F GAMING" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">ASUS ROG STRIX X670E-F GAMING</h4>
                          <p class="component-specs">A premium AMD board with robust power delivery and full PCIe 5.0 support for both GPU and storage.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage27()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php26,900.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/High-end/Gigabyte X670E AORUS MASTER.png" alt="Gigabyte X670E AORUS MASTER" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Gigabyte X670E AORUS MASTER</h4>
                          <p class="component-specs">Focused on ultimate connectivity and expansion, perfect for power users with multiple high-speed devices.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage28()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php27,600.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/High-end/MSI MPG Z790 CARBON WIFI.png" alt="MSI MPG Z790 CARBON WIFI" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">MSI MPG Z790 CARBON WIFI</h4>
                          <p class="component-specs">A high-performance Intel board known for its sleek aesthetics, strong VRMs, and gaming-focused features.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage29()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Motherboard</h3>
                  <div class="component-price">Php13,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                           <img src="Components/Motherboard/High-end/Gigabyte Z790 AORUS XTREME.png" alt="Gigabyte Z790 AORUS XTREME" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Gigabyte Z790 AORUS XTREME</h4>
                          <p class="component-specs">A no-compromises, luxury-tier motherboard with the highest-end features and build quality money can buy.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage30()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  `;
grid.scrollTop = 0;

updateActiveButton('motherboard');
}


function Storage() {
const grid = document.getElementById('component-grid');
grid.innerHTML = ` 
  
   <div class="storage">
          <div class="primary-ssd">
              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php2,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Low-end/Crucial P3 Plus 1TB PCIe 4.0 NVMe.png" alt="Crucial P3 Plus" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Crucial P3 Plus 1TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">The best value entry into PCIe 4.0 speeds for faster load times.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage31()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php3,100.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Low-end/Western Digital Blue SN580 1TB PCIe 4.0 NVMe.png" alt="WD Blue SN580" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Western Digital Blue SN580 1TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">A reliable and consistent performer from a trusted brand.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage32()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php2,500.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Low-end/U4KDrMC6PW64eDPDbhhPST-removebg-preview.png" alt="TeamGroup MP34" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">TeamGroup MP34 1TB PCIe 3.0 NVMe</h4>
                              <p class="component-specs">A durable budget workhorse with DRAM for stable performance.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage33()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php2,300.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Low-end/Kingston NV2 1TB PCIe 4.0 NVMe.png" alt="Kingston NV2" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Kingston NV2 1TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">An extremely affordable and capable drive for basic builds.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage34()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php2,900.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Low-end/Sabrent Rocket Q 1TB PCIe 3.0 NVMe.png" alt="Sabrent Rocket Q" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Sabrent Rocket Q 1TB PCIe 3.0 NVMe</h4>
                              <p class="component-specs">Offers good QLC performance and capacity for the price.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage35()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php5,200.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Mid-range/Samsung 980 Pro 1TB_2TB PCIe 4.0NVMe.png" alt="Samsung 980 Pro" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Samsung 980 Pro 1TB/2TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">The performance staple, known for its top-tier speed and reliability.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage36()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php4,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Mid-range/WD Black SN850X 1TB_2TB PCIe 4.0 NVMe .png" alt="WD Black SN850X" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">WD Black SN850X 1TB/2TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">An excellent alternative that competes with the best, offering fierce performance.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage37()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php4,500.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Mid-range/Crucial T500 1TB_2TB PCIe 4.0 NVMe.png" alt="Crucial T500" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Crucial T500 1TB/2TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">A great value performer that delivers high-end speeds without the premium price.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage38()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php5,500.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Mid-range/SK Hynix Platinum P41 1TB_2TB PCIe 4.0 NVMe.png" alt="SK Hynix Platinum P41" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">SK Hynix Platinum P41 1TB/2TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">Consistently fast and incredibly reliable, from a leading memory maker.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage39()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php5,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/Mid-range/Sabrent Rocket 4 1TB_2TB PCIe 4.0 NVMe.png" alt="Sabrent Rocket 4" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Sabrent Rocket 4 1TB/2TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">A popular enthusiast choice that delivers robust performance.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage40()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php8,500.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/High-end/Samsung 990 Pro 2TB_4TB PCIe 4.0 NVMe.png" alt="Samsung 990 Pro" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Samsung 990 Pro 2TB/4TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">The reigning champion for consumer drives, offering the fastest real-world speeds.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage41()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php7,200.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/High-end/WD Black SN850X 4TB PCIe 4.0 NVMe.png" alt="WD Black SN850X" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">WD Black SN850X 4TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">A high-capacity powerhouse that doesn't compromise on performance.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage42()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

                   <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php8,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/High-end/Sabrent Rocket 4 Plus 4TB PCIe 4.0 NVMe.png" alt="Sabrent Rocket 4 Plus" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Sabrent Rocket 4 Plus 4TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">An enthusiast-grade drive offering massive capacity and top-tier speed.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage43()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php9,500.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/High-end/Crucial T700 2TB_4TB PCIe 5.0 NVMe.png" alt="Crucial T700" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Crucial T700 2TB/4TB PCIe 5.0 NVMe</h4>
                              <p class="component-specs">Delivers next-gen PCIe 5.0 speeds for the absolute fastest data transfers (requires compatible motherboard).</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage44()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Primary SSD</h3>
                      <div class="component-price">Php7,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/SSD/High-end/Samsung 980 Pro 4TB PCIe 4.0 NVMe .png" alt="Samsung 980 Pro" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Samsung 980 Pro 4TB PCIe 4.0 NVMe</h4>
                              <p class="component-specs">A reliable and incredibly fast high-capacity drive from a trusted leader.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage45()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="mass-storage">
              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php2,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/Low-end/Seagate Barracuda 2TB HDD.png" alt="Seagate Barracuda" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Seagate Barracuda 2TB HDD</h4>
                              <p class="component-specs">A go-to budget drive for storing large game libraries and media files.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage46()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php2,900.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/Low-end/Western Digital Blue 2TB HDD.png" alt="WD Blue" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Western Digital Blue 2TB HDD</h4>
                              <p class="component-specs">A reliable and quiet drive for secondary mass storage needs.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage47()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php2,700.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/Low-end/Toshiba P300 2TB HDD.png" alt="Toshiba P300" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Toshiba P300 2TB HDD</h4>
                              <p class="component-specs">A solid performance-oriented HDD option for gamers on a budget.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage48()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php1,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/Low-end/Seagate Barracuda 1TB HDD.png" alt="Seagate Barracuda" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Seagate Barracuda 1TB HDD</h4>
                              <p class="component-specs">A basic entry-point for adding bulk storage space.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage49()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php1,900.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/Low-end/Western Digital Blue 1TB HDD.png" alt="WD Blue" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Western Digital Blue 1TB HDD</h4>
                              <p class="component-specs">A dependable choice for adding a small amount of extra storage.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage50()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php4,200.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/Mid-range/Western Digital Blue 2TB_4TB HDD.png" alt="WD Blue" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Western Digital Blue 4TB HDD</h4>
                              <p class="component-specs">The gold standard for SATA SSDs, offering excellent DRAM-backed performance.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage51()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php4,100.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/Mid-range/Seagate Barracuda 2TB_4TB HDD.png" alt="Seagate Barracuda" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Seagate Barracuda 4TB HDD</h4>
                              <p class="component-specs">A premium SATA SSD known for its exceptional endurance and longevity.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage52()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php8,500.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/High-end/Western Digital Red Plus 8TB_12TB HDD.png" alt="WD Red Plus" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Western Digital Red Plus 8TB HDD</h4>
                              <p class="component-specs">A high-quality and reliable SATA SSD for speeding up your storage pool.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage52()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php8,800.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/High-end/Seagate IronWolf.png" alt="Seagate IronWolf" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Seagate IronWolf 8TB HDD</h4>
                              <p class="component-specs">A high-capacity, reliable drive for storing vast amounts of data.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage97()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="component-card">
                  <div class="card-header">
                      <h3 class="component-category">Storage - Mass HDD</h3>
                      <div class="component-price">Php6,200.00</div>
                  </div>
                  <div class="card-content">
                      <div class="component-info">
                          <div class="component-image">
                              <img src="Components/Mass Storage/High-end/Western Digital Black 6TB HDD.png" alt="WD Black" class="component-img">
                          </div>
                          <div class="component-details">
                              <h4 class="component-name">Western Digital Black 6TB HDD</h4>
                              <p class="component-specs">A cost-effective high-capacity HDD for archives and game libraries.</p>
                              <div class="card-actions">
                                  <button class="info-btn" onclick="showimage98()">INFO</button>
                                  <button class="select-btn">SELECT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  `;
grid.scrollTop = 0;

updateActiveButton('Storage');
}


function gpu() {
const grid = document.getElementById('component-grid');
grid.innerHTML = ` 
  
    <div class="gpu">
          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php12,445.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Low-end/AMD Radeon RX 6600.png" alt="Radeon RX 6600" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Radeon RX 6600</h4>
                          <p class="component-specs">The undisputed champion for smooth 1080p gaming on a tight budget.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage53()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php15,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Low-end/NVIDIA GeForce RTX 3060.png" alt="NVIDIA RTX 3060" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">NVIDIA GeForce RTX 3060</h4>
                          <p class="component-specs">A well-rounded option with great feature support and a useful 12GB of VRAM.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage54()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php11,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Low-end/Intel Arc A750.png" alt="Intel Arc A750" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Intel Arc A750</h4>
                          <p class="component-specs">Offers amazing modern performance-per-dollar, competing strongly in its price range.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage55()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php13,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Low-end/AMD Radeon RX 7600.png" alt="AMD Radeon RX 7600" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Radeon RX 7600</h4>
                          <p class="component-specs">A very efficient and capable 1080p GPU, perfect for modern, low-power builds.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage56()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php14,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Low-end/NVIDIA GeForce RTX 4060.png" alt="NVIDIA RTX 4060" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">NVIDIA GeForce RTX 4060</h4>
                          <p class="component-specs">Brings the game-changing power of DLSS 3 and high efficiency to the budget segment.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage57()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php25,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Mid-range/AMD Radeon RX 7800 XT.png" alt="AMD Radeon RX 7800 XT" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Radeon RX 7800 XT</h4>
                          <p class="component-specs">Delivers exceptional 1440p gaming performance, making it the best value in its class.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage58()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php32,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Mid-range/NVIDIA GeForce RTX 4070.png" alt="NVIDIA RTX 4070" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">NVIDIA GeForce RTX 4070</h4>
                          <p class="component-specs">The balanced choice, offering excellent 1440p/light 4K performance, DLSS 3, and great efficiency.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage59()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php28,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Mid-range/AMD Radeon RX 7700 XT.png" alt="AMD Radeon RX 7700 XT" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Radeon RX 7700 XT</h4>
                          <p class="component-specs">A strong performer for 1440p gaming, sitting just behind the 7800 XT for a lower price.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage60()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php22,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Mid-range/NVIDIA GeForce RTX 4060 Ti.png" alt="NVIDIA RTX 4060 Ti" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">NVIDIA GeForce RTX 4060 Ti</h4>
                          <p class="component-specs">A capable card for high-refresh-rate 1080p and solid 1440p gaming with DLSS 3.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage61()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php19,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/Mid-range/AMD Radeon RX 6750 XT.png" alt="AMD Radeon RX 6750 XT" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Radeon RX 6750 XT</h4>
                          <p class="component-specs">The previous-generation value king that still offers tremendous performance for the money.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage62()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php85,000.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/High-end/NVIDIA GeForce RTX 4090.png" alt="NVIDIA RTX 4090" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">NVIDIA GeForce RTX 4090</h4>
                          <p class="component-specs">The undisputed performance king, built for maxed-out 4K gaming and extreme content creation.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage63()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php62,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/High-end/AMD Radeon RX 7900 XTX.png" alt="AMD Radeon RX 7900 XTX" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Radeon RX 7900 XTX</h4>
                          <p class="component-specs">AMD's flagship competitor, offering fantastic raw performance for 4K gaming.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage64()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php55,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/High-end/NVIDIA GeForce RTX 4080 Super.png" alt="NVIDIA RTX 4080 Super" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">NVIDIA GeForce RTX 4080 Super</h4>
                          <p class="component-specs">An excellent 4K gaming card that delivers high frame rates with all the premium NVIDIA features.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage65()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php48,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/High-end/NVIDIA GeForce RTX 4070 Ti Super.png" alt="NVIDIA RTX 4070 Ti Super" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">NVIDIA GeForce RTX 4070 Ti Super</h4>
                          <p class="component-specs">Arguably the best "value" in the high-end segment, offering near-4080 performance for less.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage66()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Graphics Card</h3>
                  <div class="component-price">Php45,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/GPU/High-end/AMD Radeon RX 7900 XT.png" alt="AMD Radeon RX 7900 XT" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">AMD Radeon RX 7900 XT</h4>
                          <p class="component-specs">A solid high-end alternative that provides strong 4K performance at a more accessible price point.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage67()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
grid.scrollTop = 0;

updateActiveButton('gpu');
}

function ram() {
const grid = document.getElementById('component-grid');
grid.innerHTML = ` 
    <div class="ram">
          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php2,250.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Low-end/Corsair Vengeance LPX DDR4-3200 CL16.png" alt="Corsair Vengeance LPX" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Corsair Vengeance LPX DDR4-3200 CL16 (16GB/32GB)</h4>
                          <p class="component-specs">A reliable, low-profile workhorse perfect for budget builds and small form factors.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage68()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php2,100.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Low-end/TeamGroup Vulcan Z DDR4-3200 CL16.png" alt="TeamGroup Vulcan Z" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">TeamGroup Vulcan Z DDR4-3200 CL16 (16GB/32GB)</h4>
                          <p class="component-specs">Excellent value RAM that delivers solid performance without any frills.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage69()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php2,300.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Low-end/G.Skill Ripjaws V DDR4-3200 CL16.png" alt="G.Skill Ripjaws V" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">G.Skill Ripjaws V DDR4-3200 CL16 (16GB/32GB)</h4>
                          <p class="component-specs">A popular and consistently well-priced performer for the AM4 and Intel platforms.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage70()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php2,150.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Low-end/Crucial Ballistix DDR4-3200 CL16.png" alt="Crucial Ballistix" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Crucial Ballistix DDR4-3200 CL16 (16GB/32GB)</h4>
                          <p class="component-specs">Known for its high-quality modules and strong overclocking potential for its class.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage71()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php2,050.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Low-end/Patriot Viper Steel DDR4-3200 CL16.png" alt="Patriot Viper Steel" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Patriot Viper Steel DDR4-3200 CL16 (16GB/32GB)</h4>
                          <p class="component-specs">A robust, no-nonsense kit built with a performance-focused heat spreader.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage72()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php4,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Mid-range/G.Skill Flare X5 DDR5-6000 CL30.png" alt="G.Skill Flare X5" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">G.Skill Flare X5 DDR5-6000 CL30 (32GB)</h4>
                          <p class="component-specs">The go-to, optimized kit for AMD AM5 platforms, offering the ideal speed for Ryzen 7000.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage73()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php5,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Mid-range/Corsair Vengeance DDR5-6000 CL30.png" alt="Corsair Vengeance" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Corsair Vengeance DDR5-6000 CL30 (32GB)</h4>
                          <p class="component-specs">A versatile and reliable kit that works excellently with both Intel and AMD systems.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage74()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php5,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/High-end/TeamGroup T-Force Delta RGB DDR5-7200 CL34 .png" alt="TeamGroup T-Force Delta" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">TeamGroup T-Force Delta RGB DDR5-6000 CL30 (32GB)</h4>
                          <p class="component-specs">Combines the performance sweet spot with vibrant, stylish RGB lighting.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage75()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php5,100.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Mid-range/Kingston FURY Beast DDR5-6000 CL30 .png" alt="Kingston FURY Beast" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Kingston FURY Beast DDR5-6000 CL30 (32GB)</h4>
                          <p class="component-specs">Offers plug-and-play reliability and strong performance with a sleek aesthetic.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage76()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php4,900.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/Mid-range/G.Skill Ripjaws S5 DDR5-6000 CL30.png" alt="G.Skill Ripjaws S5" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">G.Skill Ripjaws S5 DDR5-6000 CL30 (32GB)</h4>
                          <p class="component-specs">Provides top-tier mid-range performance and stability with a clean, minimalist design.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage77()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php8,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/High-end/G.Skill Trident Z5 RGB DDR5-6400 CL32 .png" alt="G.Skill Trident Z5 RGB" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">G.Skill Trident Z5 RGB DDR5-6400 CL32 (32GB/64GB)</h4>
                          <p class="component-specs">A premium blend of high-speed performance and iconic, vibrant RGB lighting.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage82()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php9,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/High-end/Corsair Dominator Platinum DDR5-6600 CL32 .png" alt="Corsair Dominator Platinum" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Corsair Dominator Platinum DDR5-6600 CL32 (32GB/64GB)</h4>
                          <p class="component-specs">The flagship choice for builders seeking top-tier performance, premium materials, and advanced lighting.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage83()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php10,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/High-end/Kingston FURY Renegade DDR5-7200 CL34.png" alt="Kingston FURY Renegade" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Kingston FURY Renegade DDR5-7200 CL34 (32GB/64GB)</h4>
                          <p class="component-specs">Pushes the boundaries of speed for extreme performance on tuned Intel platforms.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage84()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php9,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/High-end/TeamGroup T-Force Delta RGB DDR5-7200 CL34 .png" alt="TeamGroup T-Force Delta" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">TeamGroup T-Force Delta RGB DDR5-7200 CL34 (32GB)</h4>
                          <p class="component-specs">Delivers bleeding-edge speed wrapped in a striking, full-RGB design.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage85()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Memory</h3>
                  <div class="component-price">Php11,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/Memory/High-end/G.Skill Trident Z5 Neo DDR5-6000 CL30.png" alt="G.Skill Trident Z5 Neo" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">G.Skill Trident Z5 Neo DDR5-6000 CL30 (64GB)</h4>
                          <p class="component-specs">The ultimate high-capacity kit for AMD workstations, balancing speed, capacity, and compatibility.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage86()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       </div>




   
       </div> 
  `;
grid.scrollTop = 0;

updateActiveButton('ram');
}


function psu() {
const grid = document.getElementById('component-grid');
grid.innerHTML = ` 
  
    <div class="psu">
          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php3,525.94</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Low-end/Corsair CX650 (650W 80+ Bronze).png" alt="Corsair CX650" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Corsair CX650 (650W 80+ Bronze)</h4>
                          <p class="component-specs">A reliable and widely recommended budget foundation for entry-level to mid-range builds.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage82()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php4,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Low-end/EVGA 600 GD (600W 80+ Gold).png" alt="EVGA 600 GD" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">EVGA 600 GD (600W 80+ Gold)</h4>
                          <p class="component-specs">Offers excellent value by bringing 80+ Gold efficiency to a very affordable price point.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage83()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php3,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Low-end/SeaSonic S12III (650W 80+ Bronze).png" alt="SeaSonic S12III" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">SeaSonic S12III (650W 80+ Bronze)</h4>
                          <p class="component-specs">Comes from a trusted PSU manufacturer, providing dependable entry-level performance.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage84()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php4,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Low-end/be quiet! System Power 10 (650W 80+ Bronze).png" alt="be quiet! System Power 10" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">be quiet! System Power 10 (650W 80+ Bronze)</h4>
                          <p class="component-specs">Delivers on the brand's promise with quiet and stable operation for budget systems.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage85()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php3,900.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Low-end/Cooler Master MWE Bronze (650W 80+ Bronze).png" alt="Cooler Master MWE Bronze" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Cooler Master MWE Bronze (650W 80+ Bronze)</h4>
                          <p class="component-specs">A solid and capable performer that reliably powers builds without breaking the bank.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage86()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php6,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Mid-range/Corsair RM750e (750W 80+ Gold).png" alt="Corsair RM750e" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Corsair RM750e (750W 80+ Gold)</h4>
                          <p class="component-specs">The top value pick in the mid-range, offering high performance, quiet operation, and a fully modular design.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage87()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php7,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Mid-range/SeaSonic FOCUS GX-850 (850W 80+ Gold).png" alt="SeaSonic FOCUS GX-850" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">SeaSonic FOCUS GX-850 (850W 80+ Gold)</h4>
                          <p class="component-specs">A premium-quality unit known for its excellent reliability, tight voltage regulation, and long warranty.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage88()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php6,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Mid-range/MSI MPG A750GF (750W 80+ Gold)png.png" alt="MSI MPG A750GF" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">MSI MPG A750GF (750W 80+ Gold)</h4>
                          <p class="component-specs">Packed with great features, including a silent fan and fully modular cables, from a trusted OEM.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage89()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php7,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Mid-range/Super Flower Leadex III (850W 80+ Gold).png" alt="Super Flower Leadex III" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Super Flower Leadex III (850W 80+ Gold)</h4>
                          <p class="component-specs">Offers top-tier performance and build quality that often rivals more expensive brands.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage90()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php6,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/Mid-range/be quiet! Straight Power 11 (750W 80+ Gold).png" alt="be quiet! Straight Power 11" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">be quiet! Straight Power 11 (750W 80+ Gold)</h4>
                          <p class="component-specs">Engineered for near-silent operation under load, making it ideal for quiet-focused builds.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage91()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php9,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/High-end/Corsair RM1000x (1000W 80+ Gold).png" alt="Corsair RM1000x" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Corsair RM1000x (1000W 80+ Gold)</h4>
                          <p class="component-specs">A reliable, high-performance, and quiet power supply for high-wattage gaming and workstation PCs.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage92()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php12,800.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/High-end/SeaSonic PRIME TX-1000 (1000W 80+ Titanium).png" alt="SeaSonic PRIME TX-1000" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">SeaSonic PRIME TX-1000 (1000W 80+ Titanium)</h4>
                          <p class="component-specs">Represents the ultimate in power efficiency and build quality with its 80+ Titanium rating.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage93()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php11,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/High-end/be quiet! Dark Power 13 (1000W 80+ Titanium).png" alt="be quiet! Dark Power 13" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">be quiet! Dark Power 13 (1000W 80+ Titanium)</h4>
                          <p class="component-specs">A premium, ultra-quiet power supply that combines top-tier efficiency with sophisticated features.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage94()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php15,200.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/High-end/ASUS ROG THOR 1200P2 (1200W 80+ Platinum).png" alt="ASUS ROG THOR 1200P2" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">ASUS ROG THOR 1200P2 (1200W 80+ Platinum)</h4>
                          <p class="component-specs">A luxury option for enthusiasts, featuring a power output display, premium components, and sleek aesthetics.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage95()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="component-card">
              <div class="card-header">
                  <h3 class="component-category">Power Supply</h3>
                  <div class="component-price">Php18,500.00</div>
              </div>
              <div class="card-content">
                  <div class="component-info">
                      <div class="component-image">
                          <img src="Components/PSU/High-end/Corsair HX1500i (1500W 80+ Platinum).png" alt="Corsair HX1500i" class="component-img">
                      </div>
                      <div class="component-details">
                          <h4 class="component-name">Corsair HX1500i (1500W 80+ Platinum)</h4>
                          <p class="component-specs">Built for extreme builds with multiple GPUs, offering massive power headroom and digital monitoring.</p>
                          <div class="card-actions">
                              <button class="info-btn" onclick="showimage96()">INFO</button>
                              <button class="select-btn">SELECT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  
  
  
  `;
grid.scrollTop = 0;

updateActiveButton('psu');
}

document.addEventListener('DOMContentLoaded', function() {
const componentItems = document.querySelectorAll('.component-list');

componentItems.forEach(item => {
item.addEventListener('click', function() {
// Remove active class from all items
componentItems.forEach(i => i.classList.remove('active'));
// Add active class to clicked item
this.classList.add('active');
});
});
});



// here is the function for the image overlay for the info buttons
// the functions starts here

function showimage1() {
    // create a centered overlay showing the image
    // append to body so it overlays the whole page
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 5 5600.png" alt="AMD Ryzen 5 5600" class="overlay-img">
        </div>
    `;

    // close when clicking the close button or background
    overlay.addEventListener('click', function(e) {
        // if clicked the background (overlay itself) or the close button, remove
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });

    // allow Esc to close
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);

    document.body.appendChild(overlay);

}

function showimage2() {
    // create a centered overlay showing the image
    // append to body so it overlays the whole page
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_Intel Core i3-13100F.png" alt="AMD Ryzen 5 5600" class="overlay-img">
        </div>
    `;

    // close when clicking the close button or background
    overlay.addEventListener('click', function(e) {
        // if clicked the background (overlay itself) or the close button, remove
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });

    // allow Esc to close
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);

    document.body.appendChild(overlay);

}

function showimage3() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 5 7600X.png" alt="AMD Ryzen 5 7600" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage4() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_Intel Core i5-12400F.png" alt="Intel Core i5-12400F" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage5() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 5 5600X.png" alt="AMD Ryzen 5 5600X" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage6() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 7 7800X3D.png" alt="AMD Ryzen 7 7800X3D" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage7() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_Intel Core i5-14600K.png" alt="Intel Core i5-14600K" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage8() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 5 7600X.png" alt="AMD Ryzen 5 7600X" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage9() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_Intel Core i7-13700K.png" alt="Intel Core i7-13700K" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage10() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 7 7700X.png" alt="AMD Ryzen 7 7700X" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage11() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 9 7950X3D.png" alt="AMD Ryzen 9 7950X3D" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage12() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_Intel Core i9-14900K.png" alt="Intel Core i9-14900K" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage13() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 9 7950X.png" alt="AMD Ryzen 9 7950X" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage14() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_ Intel Core i9-13900K.png" alt="Intel Core i9-13900K" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage15() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Processor/specs_AMD Ryzen 9 7900X3D.png" alt="AMD Ryzen 9 7900X3D" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

// MOTHERBOARD FUNCTIONS (showimage16-30)
function showimage16() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_MSI PRO B760M-P.png" alt="MSI PRO B760M-P" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage17() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_ASRock B650M-HDV_M.2.png" alt="ASRock B650M-HDV/M.2" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage18() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_Gigabyte B760M DS3H.png" alt="Gigabyte B760M DS3H" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage19() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_MSI PRO B650M-A WIFI.png" alt="MSI PRO B650M-A WIFI" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage20() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_ASRock B550M Pro4.png" alt="ASRock B550M Pro4" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage21() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_ASUS TUF GAMING B650-PLUS WIFI.png" alt="ASUS TUF GAMING B650-PLUS WIFI" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage22() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_MSI MAG B760 TOMAHAWK WIFI.png" alt="MSI MAG B760 TOMAHAWK WIFI" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage23() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_MSI MAG B650 TOMAHAWK WIFI.png" alt="MSI MAG B650 TOMAHAWK WIFI" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage24() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_Gigabyte B650 AORUS ELITE AX.png" alt="Gigabyte B650 AORUS ELITE AX" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage25() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_ASUS ROG STRIX B760-F GAMING.png" alt="ASUS ROG STRIX B760-F GAMING" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage26() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_ASUS ROG MAXIMUS Z790 HERO.png" alt="ASUS ROG MAXIMUS Z790 HERO" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage27() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_ASUS ROG STRIX X670E-F GAMING.png" alt="ASUS ROG STRIX X670E-F GAMING" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage28() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_Gigabyte X670E AORUS MASTER.png" alt="Gigabyte X670E AORUS MASTER" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage29() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_MSI MPG Z790 CARBON WIFI.png" alt="MSI MPG Z790 CARBON WIFI" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage30() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Motherboard/specs_Gigabyte Z790 AORUS XTREME.png" alt="Gigabyte Z790 AORUS XTREME" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

// STORAGE SSD FUNCTIONS (showimage31-44)
function showimage31() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Crucial P3 Plus 1TB PCIe 4.0 NVMe.png" alt="Crucial P3 Plus 1TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage32() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Western Digital Blue SN580 1TB PCIe 4.0 NVMe.png" alt="Western Digital Blue SN580 1TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage33() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_TeamGroup MP34 1TB PCIe 3.0 NVMe.png" alt="TeamGroup MP34 1TB PCIe 3.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage34() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Kingston NV2 1TB PCIe 4.0 NVMe.png" alt="Kingston NV2 1TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage35() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Sabrent Rocket Q 1TB PCIe 3.0 NVMe.png" alt="Sabrent Rocket Q 1TB PCIe 3.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage36() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Samsung 980 Pro 1TB_2TB PCIe 4.0NVMe.png" alt="Samsung 980 Pro 1TB/2TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage37() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_WD Black SN850X 1TB_2TB PCIe 4.0 NVMe.png" alt="WD Black SN850X 1TB/2TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage38() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Crucial T500 1TB_2TB PCIe 4.0 NVMe.png" alt="Crucial T500 1TB/2TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage39() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_SK Hynix Platinum P41 1TB_2TB PCIe 4.0 NVMe.png" alt="SK Hynix Platinum P41 1TB/2TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage40() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Sabrent Rocket 4 1TB_2TB PCIe 4.0 NVMe.png" alt="Sabrent Rocket 4 1TB/2TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage41() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Samsung 990 Pro 2TB_4TB PCIe 4.0 NVMe.png" alt="Samsung 990 Pro 2TB/4TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage42() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_WD Black SN850X 4TB PCIe 4.0 NVMe.png" alt="WD Black SN850X 4TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage43() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Sabrent Rocket 4 Plus 4TB PCIe 4.0 NVMe.png" alt="Sabrent Rocket 4 Plus 4TB PCIe 4.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage44() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/SSD/specs_Crucial T700 2TB_4TB PCIe 5.0 NVMe.png" alt="Crucial T700 2TB/4TB PCIe 5.0 NVMe" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

// STORAGE HDD FUNCTIONS (showimage45-52)
function showimage45() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Seagate Barracuda 2TB HDD.png" alt="Seagate Barracuda 2TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage46() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Western Digital Blue 2TB HDD.png" alt="Western Digital Blue 2TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage47() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Toshiba P300 2TB HDD.png" alt="Toshiba P300 2TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage48() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Seagate Barracuda 1TB HDD.png" alt="Seagate Barracuda 1TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage49() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Western Digital Blue 1TB HDD.png" alt="Western Digital Blue 1TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage50() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Western Digital Blue 4TB HDD.png" alt="Western Digital Blue 4TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage51() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Seagate Barracuda 4TB HDD.png" alt="Seagate Barracuda 4TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage52() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Western Digital Red Plus 8TB HDD.png" alt="Western Digital Red Plus 8TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

// GPU FUNCTIONS (showimage53-67)
function showimage53() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_AMD Radeon RX 6600.png" alt="AMD Radeon RX 6600" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage54() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_NVIDIA GeForce RTX 3060.png" alt="NVIDIA GeForce RTX 3060" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage55() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_Intel Arc A750.png" alt="Intel Arc A750" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage56() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_AMD Radeon RX 7600.png" alt="AMD Radeon RX 7600" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage57() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_NVIDIA GeForce RTX 4060.png" alt="NVIDIA GeForce RTX 4060" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage58() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_AMD Radeon RX 7800 XT.png" alt="AMD Radeon RX 7800 XT" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage59() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_NVIDIA GeForce RTX 4070.png" alt="NVIDIA GeForce RTX 4070" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage60() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_AMD Radeon RX 7700 XT.png" alt="AMD Radeon RX 7700 XT" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage61() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_NVIDIA GeForce RTX 4060 Ti.png" alt="NVIDIA GeForce RTX 4060 Ti" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage62() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_AMD Radeon RX 6750 XT.png" alt="AMD Radeon RX 6750 XT" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage63() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_NVIDIA GeForce RTX 4090.png" alt="NVIDIA GeForce RTX 4090" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage64() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_AMD Radeon RX 7900 XTX.png" alt="AMD Radeon RX 7900 XTX" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage65() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_NVIDIA GeForce RTX 4080 Super.png" alt="NVIDIA GeForce RTX 4080 Super" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage66() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_NVIDIA GeForce RTX 4070 Ti Super.png" alt="NVIDIA GeForce RTX 4070 Ti Super" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage67() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Graphics Card/specs_AMD Radeon RX 7900 XT.png" alt="AMD Radeon RX 7900 XT" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

// RAM FUNCTIONS (showimage68-81)
function showimage68() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_Corsair Vengeance LPX DDR4-3200 CL16.png" alt="Corsair Vengeance LPX DDR4-3200 CL16" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage69() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_TeamGroup Vulcan Z DDR4-3200 CL16.png" alt="TeamGroup Vulcan Z DDR4-3200 CL16" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage70() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_G.Skill Ripjaws V DDR4-3200 CL16.png" alt="G.Skill Ripjaws V DDR4-3200 CL16" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage71() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_Crucial Ballistix DDR4-3200 CL16.png" alt="Crucial Ballistix DDR4-3200 CL16" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage72() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_Patriot Viper Steel DDR4-3200 CL16.png" alt="Patriot Viper Steel DDR4-3200 CL16" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage73() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_G.Skill Flare X5 DDR5-6000 CL30.png" alt="G.Skill Flare X5 DDR5-6000 CL30" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage74() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_Corsair Vengeance DDR5-6000 CL30.png" alt="Corsair Vengeance DDR5-6000 CL30" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage75() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_TeamGroup T-Force Delta RGB DDR5-6000 CL30.png" alt="TeamGroup T-Force Delta RGB DDR5-6000 CL30" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage76() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_Kingston FURY Beast DDR5-6000 CL30.png" alt="Kingston FURY Beast DDR5-6000 CL30" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage77() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_G.Skill Ripjaws S5 DDR5-6000 CL30.png" alt="G.Skill Ripjaws S5 DDR5-6000 CL30" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage78() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_G.Skill Trident Z5 RGB DDR5-6400 CL32.png" alt="G.Skill Trident Z5 RGB DDR5-6400 CL32" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage79() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_Corsair Dominator Platinum DDR5-6600 CL32.png" alt="Corsair Dominator Platinum DDR5-6600 CL32" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage80() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_Kingston FURY Renegade DDR5-7200 CL34.png" alt="Kingston FURY Renegade DDR5-7200 CL34" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage81() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/RAM/specs_TeamGroup T-Force Delta RGB DDR5-7200 CL34.png" alt="TeamGroup T-Force Delta RGB DDR5-7200 CL34" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

// PSU FUNCTIONS (showimage82-96)
function showimage82() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_Corsair CX650 (650W 80+ Bronze).png" alt="Corsair CX650 (650W 80+ Bronze)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage83() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_EVGA 600 GD (600W 80+ Gold).png" alt="EVGA 600 GD (600W 80+ Gold)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage84() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_SeaSonic S12III (650W 80+ Bronze).png" alt="SeaSonic S12III (650W 80+ Bronze)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage85() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_be quiet! System Power 10 (650W 80+ Bronze).png" alt="be quiet! System Power 10 (650W 80+ Bronze)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage86() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_Cooler Master MWE Bronze (650W 80+ Bronze).png" alt="Cooler Master MWE Bronze (650W 80+ Bronze)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage87() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_Corsair RM750e (750W 80+ Gold).png" alt="Corsair RM750e (750W 80+ Gold)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage88() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_SeaSonic FOCUS GX-850 (850W 80+ Gold).png" alt="SeaSonic FOCUS GX-850 (850W 80+ Gold)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage89() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_MSI MPG A750GF (750W 80+ Gold).png" alt="MSI MPG A750GF (750W 80+ Gold)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage90() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_Super Flower Leadex III (850W 80+ Gold).png" alt="Super Flower Leadex III (850W 80+ Gold)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage91() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_be quiet! Straight Power 11 (750W 80+ Gold).png" alt="be quiet! Straight Power 11 (750W 80+ Gold)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage92() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_Corsair RM1000x (1000W 80+ Gold).png" alt="Corsair RM1000x (1000W 80+ Gold)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage93() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_SeaSonic PRIME TX-1000 (1000W 80+ Titanium).png" alt="SeaSonic PRIME TX-1000 (1000W 80+ Titanium)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage94() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_be quiet! Dark Power 13 (1000W 80+ Titanium).png" alt="be quiet! Dark Power 13 (1000W 80+ Titanium)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage95() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_ASUS ROG THOR 1200P2 (1200W 80+ Platinum).png" alt="ASUS ROG THOR 1200P2 (1200W 80+ Platinum)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage96() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/PSU/specs_Corsair HX1500i (1500W 80+ Platinum).png" alt="Corsair HX1500i (1500W 80+ Platinum)" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage97() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Seagate IronWolf 8TB HDD.png" alt="Seagate IronWolf 8TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

function showimage98() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-overlay-inner" role="dialog" aria-modal="true">
            <button class="overlay-close" aria-label="Close">✕</button>
            <img src="Infoimages/Storage/HDD/specs_Western Digital Black 6TB HDD.png" alt="Western Digital Black 6TB HDD" class="overlay-img">
        </div>
    `;
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('overlay-close')) {
            overlay.remove();
        }
    });
    function onKey(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', onKey);
        }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
}

   /* Search/filter function for component cards
       - filters by .component-name, .component-specs, .component-category, .component-price
       - case-insensitive
       - shows a 'No results found' message when nothing matches
    */
    function searchComponents(query) {
        const grid = document.getElementById('component-grid');
        if (!grid) return;
        const q = (query || '').trim().toLowerCase();
        const cards = Array.from(grid.querySelectorAll('.component-card'));
        let matches = 0;

        cards.forEach(card => {
            const name = (card.querySelector('.component-name')?.textContent || '').toLowerCase();
            const specs = (card.querySelector('.component-specs')?.textContent || '').toLowerCase();
            const category = (card.querySelector('.component-category')?.textContent || '').toLowerCase();
            const price = (card.querySelector('.component-price')?.textContent || '').toLowerCase();
            const combined = `${name} ${specs} ${category} ${price}`;
            const isMatch = q === '' || combined.includes(q);
            card.style.display = isMatch ? '' : 'none';
            if (isMatch) matches++;
        });

        // show/hide no-results message
        let noResults = document.getElementById('no-results');
        if (matches === 0 && cards.length > 0) {
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.id = 'no-results';
                noResults.textContent = 'No results found';
                noResults.style.padding = '18px';
                noResults.style.fontSize = '18px';
                noResults.style.color = '#666';
                noResults.style.width = '95%';
                grid.appendChild(noResults);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }


document.addEventListener('DOMContentLoaded', function() {
    const componentItems = document.querySelectorAll('.component-list');

    componentItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            componentItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    const searchInput = document.getElementById('component-search');
    if (searchInput) {
        // Filter as user types
        searchInput.addEventListener('input', function(e) {
            searchComponents(e.target.value);
        });

        // Prevent accidental form submits / keep UX clean on Enter
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') e.preventDefault();
        });
    }

    const grid = document.getElementById('component-grid');
    if (grid) {
        // Re-apply current search whenever the grid contents change (category buttons replace innerHTML)
        const observer = new MutationObserver(function() {
            const val = searchInput ? searchInput.value : '';
            searchComponents(val);
            addSelectButtonListeners();
        });
        observer.observe(grid, { childList: true });
    }

    // Run an initial filter (in case the page loaded with components already)
    if (searchInput) searchComponents(searchInput.value);
});

// Function to handle component selection
function selectComponent(event) {
    const selectBtn = event.target;
    const card = selectBtn.closest('.component-card');
    if (!card) return;

    const categoryElement = card.querySelector('.component-category');
    const priceElement = card.querySelector('.component-price');
    const nameElement = card.querySelector('.component-name');
    
    if (!categoryElement || !priceElement || !nameElement) return;

    const category = categoryElement.textContent.trim();
    const priceText = priceElement.textContent.trim();
    const componentName = nameElement.textContent.trim();
    
    // Parse price (remove "Php" and commas)
    const price = parseFloat(priceText.replace('Php', '').replace(/,/g, ''));

    // Remove previously selected card's green background in this category
    const previouslySelected = document.querySelector(`.component-card.selected[data-category="${category}"]`);
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
        previouslySelected.removeAttribute('data-category');
    }

    // Mark current card as selected
    card.classList.add('selected');
    card.setAttribute('data-category', category);

    // Update selected components object
    selectedComponents[category] = {
        name: componentName,
        price: price,
        fullText: priceText
    };

    // Update the total price
    updateTotalPrice();

    // Update the counter
    updateSelectionCounter();

    // Display selected component in sidebar
    displaySelectedInSidebar();
}

// Function to add listeners to all select buttons
function addSelectButtonListeners() {
    const selectButtons = document.querySelectorAll('.select-btn');
    selectButtons.forEach(btn => {
        // Remove existing listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', selectComponent);
    });
}

// Function to calculate and update total price
function updateTotalPrice() {
    let total = 0;
    
    for (const category in selectedComponents) {
        if (selectedComponents[category] && selectedComponents[category].price) {
            total += selectedComponents[category].price;
        }
    }

    // Format the total with proper currency format
    const totalElement = document.querySelector('.total-amount');
    if (totalElement) {
        totalElement.textContent = '₱' + total.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}

// Function to update selection counter
function updateSelectionCounter() {
    let count = 0;
    for (const category in selectedComponents) {
        if (selectedComponents[category]) {
            count++;
        }
    }
    
    const counterElement = document.querySelector('.selection-counter h5');
    if (counterElement) {
        counterElement.textContent = `${count}/7 Components Selected`;
    }
}

// Function to display selected components in sidebar
function displaySelectedInSidebar() {
    for (const category in selectedComponents) {
        let displayElement = null;
        
        // Handle storage categories specially
        if (category === 'Storage - Primary SSD' || category === 'Storage - Mass HDD') {
            displayElement = document.getElementById('selected-Storage');
        } else {
            displayElement = document.getElementById(`selected-${category}`);
        }
        
        if (displayElement) {
            // For storage, we need to handle both SSD and HDD
            //  hinahandle nito yung dalawa
            if (category === 'Storage - Primary SSD' || category === 'Storage - Mass HDD') {
                const ssdSelected = selectedComponents['Storage - Primary SSD'];
                const hddSelected = selectedComponents['Storage - Mass HDD'];
                
                let displayHTML = '';
                if (ssdSelected) {
                    displayHTML += `✓ ${ssdSelected.name}`;
                }
                if (hddSelected) {
                    if (displayHTML) displayHTML += '<br>';
                    displayHTML += `✓ ${hddSelected.name}`;
                }
                
                if (displayHTML) {
                    displayElement.innerHTML = displayHTML;
                    displayElement.style.display = 'block';
                } else {
                    displayElement.innerHTML = '';
                    displayElement.style.display = 'none';
                }
                
                // Skip the second iteration for the other storage type
                if (category === 'Storage - Primary SSD') {
                    // Mark that we already processed both storage items
                    Object.defineProperty(selectedComponents, '__storage_displayed', {
                        value: true,
                        configurable: true
                    });
                }
            } else if (category === 'Storage - Mass HDD' && selectedComponents.__storage_displayed) {
                // Skip, already displayed
                continue;
            } else if (selectedComponents[category]) {
                // Regular category handling
                displayElement.textContent = `✓ ${selectedComponents[category].name}`;
                displayElement.style.display = 'block';
            } else {
                displayElement.textContent = '';
                displayElement.style.display = 'none';
            }
        }
    }
}
