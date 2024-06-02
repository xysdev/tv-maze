// HeroSection.spec.ts
import { shallowMount } from '@vue/test-utils';
import HeroSection from '@/components/HeroSection.vue';
import dateFormatter from '@/utils/dateFormatter';
import { IShow } from '@/interfaces/show';

jest.mock('@/utils/dateFormatter', () => jest.fn());

describe('HeroSection.vue', () => {
  let show: IShow;

  beforeEach(() => {
    show = {
      id: 1,
      name: 'Test Show',
      genres: ['Drama', 'Thriller'],
      status: 'Running',
      runtime: 60,
      premiered: '2020-01-01',
      officialSite: 'http://example.com',
      schedule: {
        time: '8:00 PM',
        days: ['Monday', 'Tuesday'],
      },
      rating: {
        average: 8.5,
      },
      network: {
        id: 1,
        name: 'Test Network',
        country: {
          name: 'USA',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: {
        id: 2,
        name: 'Test WebChannel',
        country: {
          name: 'USA',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      image: {
        medium: 'http://example.com/image_medium.jpg',
        original: 'http://example.com/image.jpg',
      },
      summary: '<p>This <b>is</b> a <strong>test</strong> show summary.</p>',
      updated: 1234567890,
    };
    (dateFormatter as jest.Mock).mockReturnValue('January 2020');
  });

  it('renders show name correctly', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    expect(wrapper.find('.hero-section__name').text()).toBe(show.name);
  });

  it('computes heroStyle correctly', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    expect((wrapper.vm as any).heroStyle).toEqual({
      background: `linear-gradient(to left, transparent, black), url(${show.image.original}) right top no-repeat`,
      backgroundSize: '50%',
    });
  });

  it('formats premiered date correctly', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    expect(wrapper.find('.hero-section__rating-premiered').text()).toContain('January 2020');
  });

  it('strips HTML tags from summary correctly', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    expect((wrapper.vm as any).strippedSummary).toBe('This is a test show summary.');
  });

  it('renders rating correctly', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    expect(wrapper.find('.hero-section__rating-logo').exists()).toBe(true);
    expect(wrapper.find('.hero-section__rating-premiered span span').text()).toContain(`${show.rating?.average}/10`);
  });

  it('renders schedule correctly', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    expect(wrapper.find('.hero-section__schedule-days').text()).toBe('Monday, Tuesday on 8:00 PM');
  });

  it('renders genres correctly', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    expect(wrapper.find('.hero-section__schedule-genres').text()).toBe('| Drama · Thriller');
  });

  it('renders call to action buttons', () => {
    const wrapper = shallowMount(HeroSection, {
      props: { show },
    });
    const buttons = wrapper.findAll('.hero-section__button');
    expect(buttons).toHaveLength(2);
    buttons.forEach((button) => {
      expect(button.text()).toBe('Get Started');
    });
  });
});
