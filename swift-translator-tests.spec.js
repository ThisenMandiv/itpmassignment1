const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'mama adha gamata yanavaa',
      expected: 'මම අද ගමට යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple request',
      input: 'mata dhavalta kanna pizza oonee',
      expected: 'මට දවල්ට කන්න pizza ඕනේ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'asking question',
      input: 'oyaa adha panthi yanna enavadha?',
      expected: 'ඔයා අද පන්ති යන්න එනවද?',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Compound Sentences
    {
      tcId: 'Pos_Fun_004',
      name: 'Two activities connected',
      input: 'mama mulinma gampahata yannam eeta passe kolaba yannam',
      expected: 'මම මුලින්ම ගම්පහට යන්නම් ඒට පස්සෙ කොලබ යන්නම්',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },

    // Complex Sentences
    {
      tcId: 'Pos_Fun_005',
      name: 'Two activities connected',
      input: 'oyaa gampahata aavoth api yakkalata yamu',
      expected: 'ඔයා ගම්පහට ආවොත් අපි යක්කලට යමු',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'oyaa adha potha genaavoth mama liyala dhennam',
      expected: 'ඔයා අද පොත ගෙනාවොත් මම ලියල දෙන්නම්',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    // Questions
    {
      tcId: 'Pos_Fun_007',
      name: 'Simple question',
      input: 'oyaa adha poth geenavadha?',
      expected: 'ඔයා අද පොත් ගේනවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Question about time',
      input: 'oyaa mona maasedha iskoole ennee',
      expected: 'ඔයා මොන මාසෙද ඉස්කෝලෙ එන්නේ',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Polite question request',
      input: 'eyaata puluvandha code karanna',
      expected: 'එයාට පුලුවන්ද code කරන්න',
      category: 'Mixed singlish + English',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Direct command',
      input: 'oyaa office yanna',
      expected: 'ඔයා office යන්න',
      category: 'Mixed singlish + English',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite command',
      input: 'karunaakarala pansal yanavadha',
      expected: 'කරුනාකරල පන්සල් යනවද',
      category: 'request',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_012',
      name: 'Morning greeting',
      input: 'oyaala okkotama suba udhaeesanak',
      expected: 'ඔයාල ඔක්කොටම සුබ උදෑසනක්',
      category: 'Greeting',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Affirmative response',
      input: 'ov oyaa kivva eka hari',
      expected: 'ඔව් ඔයා කිව්ව එක හරි',
      category: 'response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Tense Variations
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense action',
      input: 'mama iiyee paasal giyaa',
      expected: 'මම ඊයේ පාසල් ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'api heta paadam karamu',
      expected: 'අපි හෙට පාඩම් කරමු',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    // Negations
    {
      tcId: 'Pos_Fun_016',
      name: 'Cannot statement',
      input: 'mata koththu kanna baee!',
      expected: 'මට කොත්තු කන්න බෑ!',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata gamata yanna baee!',
      expected: 'මට ගමට යන්න බෑ!',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'eyaalaa heta enavaa',
      expected: 'එයාලා හෙට එනවා',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'poddak innako mama ennam',
      expected: 'පොඩ්ඩක් ඉන්නකො මම එන්නම්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'English common words embedded',
      input: 'hello oyaa class giyaadha',
      expected: 'hello ඔයා class ගියාද',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
  {
      tcId: 'Pos_Fun_021',
      name: 'English brand term embedded',
      input: 'mata outlook yanna data naee  ',
      expected: 'මට outlook යන්න data නෑ',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
   {
      tcId: 'Pos_Fun_022',
      name: 'English common words embedded',
      input: 'oyaa dhannavadha phone hadhanne kohomadha kiyala',
      expected: 'ඔයා දන්නවද phone හදන්නෙ කොහොමද කියල',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'oyaata puluvandha mata rs.1000 dhenna?',
      expected: 'ඔයාට පුලුවන්ද මට rs.1000 දෙන්න?',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'mama heta school yanava ee nisaa mata panthi enne venne naee eeka mathaka thiyaaganna ',
      expected: 'මම හෙට school යනව ඒ නිසා මට පන්ති එන්නෙ වෙන්නෙ නෑ ඒක මතක තියාගන්න ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_025',
      name: 'Medium length conversation',
      input: 'heta exam nisaa adha mata paadam karanna oonee eekata mata papers oonee',
      expected: 'හෙට exam නිසා අද මට පාඩම් කරන්න ඕනේ ඒකට මට papers ඕනේ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },

  
    {
      tcId: 'Pos_Fun_026',
      name: 'Medium length conversation',
      input: 'mata palathuru kanna aasayi ee nisaa mata palathuru genalla dhenavadha?',
      expected: 'මට පලතුරු කන්න ආසයි ඒ නිසා මට පලතුරු ගෙනල්ල දෙනවද?',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamagedharainnee',
      expected: 'මම ගෙදර ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Missing space between words',
      input: 'mamapanthiyeeinne',
      expected: 'මම පන්තියේ ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Missing space between words',
      input: 'mata oonee pothak ',
      expected: 'මට ඕනේ පොතක් ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Missing space between words',
      input: 'hellooyaaofficeekeedhainne',
      expected: 'hello ඔයා office එකේද ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Missing space between words',
      input: 'eevaedeehodhayi ',
      expected: 'ඒ වැඩේ හොදයි ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Missing space between words',
      input: 'adoomokakkdhamee',
      expected: 'අඩෝ මොකක්ද මේ',
      category: 'Slang / informal language',
      grammar: 'Typographical error handling',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Missing space between words',
      input: 'mamapaasalgiyaa',
      expected: 'මම පාසල් ගියා',
      category: 'Typographical error handling',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'AMissing space between words',
      input: 'mataASAPeekaoonee',
      expected: 'මට ASAP ඒක ඕනෑ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'QMissing space between words',
      input: 'oyaakohedhainnee',
      expected: 'ඔයා කොහෙද ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Missing space between words',
      input: 'broeekasetkaraladenna',
      expected: 'bro ඒක set කරල දෙන්න',
      category: 'Typographical error handling',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  

  ui: [
    {
      tcId: 'Pos_UI_001',
      name: 'Symbols validation',
      input: '@#$%^&*()',
      partialInput: '@#$',
      expectedFull: '@#$%^&*()',
      category: 'Usability flow',
      grammar: 'N/A',
      length: 'XS'
    },
    {
      tcId: 'Pos_UI_002',
      name: 'Numbers validation',
      input: '1234567890',
      partialInput: '1234',
      expectedFull: '1234567890',
      category: 'Usability flow',
      grammar: 'N/A',
      length: 'XS'
    },
    {
      tcId: 'Neg_UI_001',
      name: 'Mixed numbers and symbols validation',
      input: '123@#45$%',
      partialInput: '123@#',
      expectedFull: '123@#45$%',
      category: 'Usability flow',
      grammar: 'N/A',
      length: 'XS'
    }
  ]
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
